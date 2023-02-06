import {incorrectResolutionError, incorrectTypeError, noResolutionError} from "../error_messages/ErrorMessageCreators";

const resolutionArr = [ "P144", "P240", "P360", "P480", "P720","P1080", "P1440", "P2160" ]

export const availableResolutionsArrValidate = (arr:any) => {

    let err = []

    if(!arr || arr.length === 0) err.push(noResolutionError('availableResolutions'))
    else if(!(Array.isArray(arr))) err.push(incorrectTypeError('availableResolutions','arr'))
    else {
        for(let item of arr) {
            //if availableResolutions doesn't exist in our resolutionArr throw error
            if(!(resolutionArr.includes(item))) {
                err.push( incorrectResolutionError(item,"availableResolutions"))
            }
        }
    }

    return err
}


