// import React from 'react'
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteAllVideoApi } from '../services/allapi';


function Videocard({video,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async() =>{
   setShow(true);
   const caption =video?.caption
  const url=video?.emdedlink
  const time=new Date()
  const timeStamp= new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hours:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
  console.log(timeStamp);

  const reqBody={
    caption,url,timeStamp
  }
  
  const result =await addVideoHistory(reqBody)
  console.log(result);
}
  
  const handleDelete = async(id)=>{
    const result = await deleteAllVideoApi(id)
    setDeleteVideoStatus(result.data)
   
    
  }
  const videoDrag=(e,video)=>{
    // console.log(typeof{id});
    console.log(video);
    // console.log(`dragged video id is ${id}`);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }

  return (
    <>
     <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-3'>
      
      
    {!isPresent && <Card.Img variant="top" src={video?.imageurl} height={'300px'} onClick={handleShow}/>}
      <Card.Body>
        
       <div className='d-flex justify-content-between'>
       <Card.Title>{video?.caption}</Card.Title>
          
        {!isPresent && <Button variant="primary" onClick={()=>handleDelete(video?.id)} ><FontAwesomeIcon icon={faTrash}  /></Button>}
       </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fs-1'>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="400" src={`${video?.embedlink}?autoplay=1`} title="Tomorrowland Belgium 2022 | Official Aftermovie"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Videocard