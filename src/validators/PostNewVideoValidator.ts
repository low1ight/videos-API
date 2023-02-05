import {stringFieldValidate} from "./common/StringFieldValidate";
import {availableResolutionsArrValidate} from "./common/AvailableResolutionsArrValidate";


type postNewVideoType = {
    title: string,
    author:string,
    availableResolutions: string[]
}

export function postNewVideoValidator({title,author,availableResolutions}:postNewVideoType) {
    let errorArr = []

    let titleErrors = stringFieldValidate(title,'title',40)
    if (titleErrors) errorArr.push(titleErrors)

    let authorErrors = stringFieldValidate(author,'author',20)
    if (authorErrors) errorArr.push(authorErrors)

    let resolutionArrErrors = availableResolutionsArrValidate(availableResolutions)
    if(resolutionArrErrors.length > 0) errorArr = [...errorArr,...resolutionArrErrors]

    if(errorArr.length > 0) {
        return {errorsMessages:errorArr}
    }

}

