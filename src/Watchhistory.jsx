import { faHouse, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { deleteVideoHistoryApi, getVideoHistoryApi } from "./services/allapi"
import { useEffect, useState } from "react"


// import React from 'react'
FontAwesomeIcon

function Watchhistory() {
  const [allVideo,setAllVideo]=useState([])
     const getVideoHistory =async()=>{
      const result =await getVideoHistoryApi()
      // console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideo(result.data)
      }
     }
     console.log(allVideo);

     const handleDeleteVideo= async(id)=>{
      await deleteVideoHistoryApi(id)
      getVideoHistory()
     }


     useEffect(()=>{
      getVideoHistory()
     },[])

  return (
    <>
    <div className="row w-100 my-5">
      <div>
      <h5 className="text-center fs-1">Watch History</h5>
      <h5 className="ms-1"><Link to={'/Home'}> <span className="hide">Back home</span><FontAwesomeIcon icon={faHouse} style={{textDecoration:'none',color:'white',fontSize:'30px'}}/></Link></h5>

      </div>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        
       {allVideo.length>0? <table className="table mt-5">
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {allVideo?.map((item)=>(
               <tr>
               <td>{1}</td>
               <td>{item?.caption}</td>
               <td><Link to={item?.url}></Link></td>
               <td>{item?.timestamp}</td>
               
               <td><button className="btn btn-warning" onClick={()=>handleDeleteVideo(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
             </tr>
            ))}
          </tbody>
        </table>
        :
        <p className="text-warning fs-3">no Watchhistory</p>}
        
      </div>
      <div className="col-md-2"></div>
    </div>


    </>
  )
}

export default Watchhistory