import { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideoApi, updateCatagoryApi } from '../services/allapi'
import { json } from 'react-router'







function View({ addVideoStatus,setDragOut}) {
  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([])

  const getAllVideo = async () => {
    const result = await getAllVideoApi()
    setAllVideo(result.data)
  }
  console.log(allVideo);

  const dragOver=(e)=>{
    e.preventDefault()
    
  }
  const videoDrop=async(e)=>{
    const result =JSON.parse(e.dataTransfer.getData("dataShare"))
   console.log(result);

  const selectedCatagory= result.catagoryDetails

  const newDetails=selectedCatagory.allVideos.filter((item)=>item.id!=result.videoid)
  console.log(newDetails); 
  const reqBody={
    catagoryName:selectedCatagory.catagoryName,
    allVideos:newDetails,
    id:selectedCatagory.id
  }
  const response =await updateCatagoryApi(selectedCatagory.id,reqBody)
  console.log(response);
  if(response.status>=200 && response.status<300){
    setDragOut(true)
  }

  }







  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus, deleteVideoStatus])

  return (
    <>
      <div className="row w-100" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        <h5>All videos</h5>

        {allVideo?.length > 0 ?
        allVideo?.map((item)=>(
           <div className="col-md-3 mt-4">
          <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
        </div> ))
       

          :

          <p className='text-primary fs-3 mt-5'>nothing to display</p>
    
        }
      </div>



    </>
  )
}

export default View