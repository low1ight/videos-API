import {stringFieldValidate} from "./common/StringFieldValidate";
import {availableResolutionsArrValidate} from "./common/AvailableResolutionsArrValidate";
import {canBeDownloadedFieldValidate} from "./common/CanBeDownloadedFieldValidate";
import {minAgeRestrictionFieldValidate} from "./common/minAgeRestriction";
import {publicationDateValidate} from "./common/publicationDateValidate";


type putVideoType = {
    title: string,
    author:string,
    availableResolutions: string[],
    canBeDownloaded: boolean,
    minAgeRestriction: number | null,
    publicationDate: string

}

export function putNewVideoValidator({title,author,availableResolutions,canBeDownloaded,minAgeRestriction,publicationDate}:putVideoType) {
    let errorArr = []

    let titleErrors = stringFieldValidate(title,'title',40)
    if (titleErrors) errorArr.push(titleErrors)

    let authorErrors = stringFieldValidate(author,'author',20)
    if (authorErrors) errorArr.push(authorErrors)

    let resolutionArrErrors = availableResolutionsArrValidate(availableResolutions)
    if(resolutionArrErrors.length > 0) errorArr = [...errorArr,...resolutionArrErrors]

    //if canBeDownloaded empty or isn't boolean
    let canBeDownloadedError = canBeDownloadedFieldValidate(canBeDownloaded)
    if(canBeDownloadedError) errorArr.push(canBeDownloadedError)

    let minAgeRestrictionError = minAgeRestrictionFieldValidate(minAgeRestriction,1,18)
    if(minAgeRestrictionError) errorArr.push(minAgeRestrictionError)

    let publicationDateError = publicationDateValidate(publicationDate)
    if(publicationDateError) errorArr.push(publicationDateError)


    if(errorArr.length > 0) {
        return {errorsMessages:errorArr}
    }

}