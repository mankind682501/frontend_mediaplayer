// import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from "./Videocard" 
import { addCatagoryApi, getAllCatagory, removeCatagoryApi, updateCatagoryApi } from '../services/allapi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Catagory({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [allCatagory, setAllCatagory] = useState([])
  const [catagoryName, setCatagoryName] = useState("")
  const [addStatus,setAddStatus]=useState(false)
  const [updateStatus,setUpdateStatus]=useState(false)
  const handleClose = () => {
    setShow(false);
    setCatagoryName("")
  };
  const handleShow = () => setShow(true);



  const handleAddCatagory = async () => {
    if (catagoryName) {
      const reqBody = {
        catagoryName,
        allVideos: []
      }
      const result = await addCatagoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCatagoryName("")
        handleClose()
        alert('catagory added sucessfully')
        setAddStatus(true)
        getCatagory()

      }

    }
    else{
      alert('please add a catagory name')
    }
  }
  const getCatagory = async () => {
    const result = await getAllCatagory()
    setAllCatagory(result.data)

  }
  console.log(catagoryName);

  const handleDelete=async(id)=>{
    await removeCatagoryApi(id)
    setAddStatus(true)
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDrop=async(e,selectedCatagory)=>{
    console.log('inside video drop function');
    console.log( 'Catagory id is:',selectedCatagory);
    const vDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(vDetails);
   
    if(selectedCatagory.allVideos.find(item=>item.id==vDetails.id)){
      alert('video is already in the catagory')
    }
    else{
      selectedCatagory.allVideos.push(vDetails)
      const result=await updateCatagoryApi(selectedCatagory.id,selectedCatagory)
      console.log(result);
      alert('video added sucessfully')
      setUpdateStatus(true)
      
    }
    // console.log(selectedCatagory);

    
  }
  const ondrag=(e,videoid,catagoryDetails)=>{
    console.log(videoid,catagoryDetails);
    const dataShare={videoid,catagoryDetails}

    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  


  useEffect(() => {
    setAddStatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCatagory()
  }, [addStatus,updateStatus,dragOut])

  return (
    <>
      <h5 className="mt-5 mt-md-0">Catagory</h5>
      <button className="btn btn-warning w-100 mt-4" onClick={handleShow}>Add Catagory</button>

      {allCatagory?.length > 0 ?
        allCatagory?.map((item) => (
          <div className="p-3 border rounded mt-4" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item)}>
            <div className='d-flex justify-content-between'>
              <p className='mb-4'>{item.catagoryName}</p>
              <button className='btn btn-primary' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            {item?.allVideos?.length>0?
            item?.allVideos?.map((video)=>(
           <div draggable onDragStart={(e)=>ondrag(e,video.id,item)}>
             <Videocard video={video} isPresent={true}/>
             </div>
          )):null
            }


            
           
          </div>


        ))
        :
        <p>no catagory added yet</p>}








      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Catagory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3'>
            <input type="text" className='form-control' onChange={(e) => setCatagoryName(e.target.value)} placeholder='Catagory Name' />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCatagory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      

    </>
  )
}

export default Catagory