import {
    fieldIsEmptyError, incorrectIsoDate,
    incorrectTypeError,
} from "../error_messages/ErrorMessageCreators";

export const publicationDateValidate = (isoDate:any) => {
    let err

    if(!isoDate) err = fieldIsEmptyError('publicationDate')
    else if (typeof isoDate !== 'string') err = incorrectTypeError('publicationDate','string')
    //if str isn't iso date
   else if(!isIsoDate(isoDate)) err = incorrectIsoDate('publicationDate')

    return err
}



function isIsoDate(str:any) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d:any = new Date(str);
    // @ts-ignore
    return d instanceof Date && !isNaN(d) && d.toISOString() === str; // valid date
}