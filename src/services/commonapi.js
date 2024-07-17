import axios from "axios"





export const commonAPI=async(httprequest,url,reqbody)=>{
    const reqconfig={
        method:httprequest,
        url,
        data:reqbody,
        Headers:{"Content-Type":"application/json"}
    }


return await axios(reqconfig).then((result)=>{
    return result
}).catch((err)=>{
    return err
})
}