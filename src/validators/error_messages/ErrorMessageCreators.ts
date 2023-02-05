 const createErrorMessage = (errReason:string,errField:string) => {
    return {
        message:errReason,
        field: errField
    }
}

export const fieldIsEmptyError = (fieldName:string) => {
    return createErrorMessage(`${fieldName} field can't be empty`,`${fieldName}`)
}

export const fieldIsTooLongError = (fieldName:string,maxLength:number) => {
    return createErrorMessage(`${fieldName} field is too long ( max: ${maxLength} )`,`${fieldName}`)
}

export const noResolutionError = (fieldName:string) => {
    return createErrorMessage(`At least one resolution should be added`,`${fieldName}`)
}

export const incorrectTypeError = (fieldError:string, requiredType:string) => {
    return createErrorMessage(`${fieldError} field should be ${requiredType}`,`${fieldError}`)
}

export const incorrectResolutionError = (incorrectResolution:string,fieldName:string) => {
    return createErrorMessage(`${incorrectResolution} resolution isn't correct!`,`${fieldName}`)
}

 export const valueIsToHigh = (maxValue:number,fieldName:string) => {
     return createErrorMessage(`The value can't be higher than ${maxValue} `,`${fieldName}`)
 }

 export const valueIsToLow = (maxValue:number,fieldName:string) => {
     return createErrorMessage(`The value can't be lower than ${maxValue} `,`${fieldName}`)
 }

 export const incorrectIsoDate = (fieldName:string) => {
     return createErrorMessage(`The date isn't correct, require correct iso format`,`${fieldName}`)
 }

