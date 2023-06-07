import instance from "./instance";

export const getListApplyStaff = (_requestId: string, ) =>{
    const url = `/request/list-apply-staff/${_requestId}`
    return instance.get(url)
}