import {fieldIsEmptyError, fieldIsTooLongError, incorrectTypeError} from "../error_messages/ErrorMessageCreators";

export const stringFieldValidate = (fieldValue:any, fieldName:string, maxLength:number) => {

    let err

    if(!fieldValue) err = fieldIsEmptyError('title')
    else if(typeof fieldValue !== 'string') err = incorrectTypeError(`${fieldName}`,'string')
    else if(fieldValue.length > 40) err = fieldIsTooLongError(`${fieldName}`,maxLength)

    return err
}