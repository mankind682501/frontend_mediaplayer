import { commonAPI } from "./commonapi"
import { serverurl } from "./serverurl"


// api to add videos
export  const allvideoapi=async(reqbody)=>{
return await commonAPI('POST',`${serverurl}/allvideos`,reqbody)
}

// api to get videos
export const getAllVideoApi=async()=>{
    return await commonAPI('GET',`${serverurl}/allvideos`,"")
}

// api to dlete video
export const deleteAllVideoApi=async(id)=>{
    return await commonAPI('DELETE',`${serverurl}/allvideos/${id}`,{})
}
// api to video to watch history
export const addVideoHistory=async(reqbody)=>{
    return await commonAPI('POST',`${serverurl}/history`,reqbody)
}
// api to get all videos from history
 export const getVideoHistoryApi=async()=>{
    return await commonAPI('GET',`${serverurl}/history`,"")
 }
//  api to delete video from history
export const deleteVideoHistoryApi= async(id)=>{
    return await commonAPI('DELETE',`${serverurl}/history/${id}`,{})
}
// api to add catagory
export const addCatagoryApi=async(reqBody)=>{
    return await commonAPI('POST',`${serverurl}/catagory`,reqBody)
}
// api to get all catagory
export const getAllCatagory=async()=>{
    return await commonAPI('GET',`${serverurl}/catagory`)
}
export const removeCatagoryApi= async(id)=>{
    return await commonAPI('DELETE',`${serverurl}/catagory/${id}`,{})
}
// api to update catagory
export const updateCatagoryApi=async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverurl}/catagory/${id}`,reqBody)
}
