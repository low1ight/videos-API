

type postNewVideoType = {
    title: string,
    author:string,
    availableResolutions: string[]
}

export let createErrorMessage = (errReason:string,errField:string) => {
   return {
       message:errReason,
       field: errField
   }
}

let fieldIsEmptyError = (fieldName:string) => {
    return createErrorMessage(`${fieldName} field can't be empty`,`${fieldName}`)
}

let fieldIsTooLongError = (fieldName:string,maxLength:number) => {
    return createErrorMessage(`${fieldName} field is too long ( max: ${maxLength} )`,`${fieldName}`)
}

let noResolutionError = (fieldName:string) => {
    return createErrorMessage(`At least one resolution should be added`,`${fieldName}`)
}

let incorrectTypeError = (fieldError:string, requiredType:string) => {
    return createErrorMessage(`${fieldError} field should be ${requiredType}`,`${fieldError}`)
}

let incorrectResolutionError = (incorrectResolution:string,fieldName:string) => {
    return createErrorMessage(`${incorrectResolution} resolution isn't correct!`,`${fieldName}`)
}


let stringFieldValidator = (fieldValue:any, fieldName:string, maxLength:number) => {

    let err

    if(!fieldValue) err = fieldIsEmptyError('title')
    else if(typeof fieldValue !== 'string') err = incorrectTypeError(`${fieldName}`,'string')
    else if(fieldValue.length > 40) err = fieldIsTooLongError(`${fieldName}`,maxLength)

    return err
}

const resolutionArr = [ "P144", "P240", "P360", "P480", "P720","P1080", "P1440", "P2160" ]

export function postNewVideoValidator({title,author,availableResolutions}:postNewVideoType) {
    let errorArr = []

    let titleErrors = stringFieldValidator(title,'title',40)
    if (titleErrors) errorArr.push(titleErrors)

    let authorErrors = stringFieldValidator(author,'author',20)
    if (authorErrors) errorArr.push(authorErrors)


    if(!availableResolutions || availableResolutions.length === 0) errorArr.push(noResolutionError('availableResolutions'))
    else if(!(Array.isArray(availableResolutions))) errorArr.push(incorrectTypeError('availableResolutions','arr'))
    else {
        for(let item of availableResolutions) {
            //if one of availableResolutions doesn't exist in our resolutionArr throw error
            if(!(resolutionArr.includes(item))) {
                errorArr.push(incorrectResolutionError(item,"availableResolutions"))
            }
        }
    }

    if(errorArr.length > 0) {
        return {errorsMessages:errorArr}
    }

}


let test = {
    title: '',
    author:'123',
    availableResolutions: ['1']
}

console.log(postNewVideoValidator(test))

