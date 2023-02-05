import {fieldIsEmptyError, incorrectTypeError} from "../error_messages/ErrorMessageCreators";

export let canBeDownloadedFieldValidate = (canBeDownloaded:any) => {
    let err

    if(typeof canBeDownloaded === 'undefined') err = fieldIsEmptyError('canBeDownloaded')
    else if (typeof canBeDownloaded !== 'boolean') err = incorrectTypeError('canBeDownloaded','boolean')

    return err
}