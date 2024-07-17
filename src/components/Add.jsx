// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allvideoapi } from '../services/allapi';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVideoStatus}) {
  
  const [show, setShow] = useState(false);
  const [videoDetails,setVideoDetails] =useState({
    caption:"",
    imageurl:"",
    embedlink:""

  })
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getlink = (e)=>{
    const link= e.target.value
    console.log(link);
    if(link.startsWith(`https://www.youtu.be/`)){
     setVideoDetails({...videoDetails,embedlink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
      
      
    }
    else{
      setVideoDetails({...videoDetails,embedlink:`https://www.youtube.com/embed/${link.slice(-11)}`})
      
      
    }

  } 
  const handleUpload = async (e)=>{
    e.preventDefault()

    const {caption,imageurl,embedlink}=videoDetails
    if(!caption || !imageurl|| !embedlink){
      toast.error('please fill the form completely')
    }
    
   else
   {const result=await allvideoapi(videoDetails)
    if(result.status>=200 && result.status<300){
      toast.success(`video uploaded completedly`)
      handleClose()
      setAddVideoStatus(result.data)
    }
    else{
      toast.error(`something went wrong`)
      
    }}
  }







  


  return (
    <>
   <div className='d-flex'>
   <h4 className='mt-2'>Upload new videos</h4>
   <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} style={{color: "#74C0FC",fontSize:'30px'}}  /></button>
   </div>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning me-2 fs-1'>Upload videos<FontAwesomeIcon icon={faPhotoFilm}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-primary fs-3'>please fill the form completely</p>
          <form className='border p-3 rounded'>
            <div className='mb-3'>
            <input type="text" placeholder='video caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
            </div>
            <div className="mb-3">
            <input type="text" placeholder='video image' onChange={(e)=>setVideoDetails({...videoDetails,imageurl:e.target.value})} />
            </div>
            <div className="mb-3">
            <input type="text" placeholder='video url' onChange={(e)=>getlink(e)}/>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}  >
            upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose="2000" />
    </>
  )
}

export default Add