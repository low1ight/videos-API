import {
    fieldIsEmptyError,
    incorrectTypeError,
    valueIsToHigh,
    valueIsToLow
} from "../error_messages/ErrorMessageCreators";




export const minAgeRestrictionFieldValidate = (age:any,minAge:number,maxAge:number) => {
    let err

    if(!age && age !== 0) err = fieldIsEmptyError('minAgeRestriction')
    else if (typeof age !== 'number') err = incorrectTypeError('minAgeRestriction','number')
    else if(age > maxAge) err = valueIsToHigh(maxAge,'minAgeRestriction')
    else if(age < minAge) err = valueIsToLow(minAge,'minAgeRestriction')

    return err
}