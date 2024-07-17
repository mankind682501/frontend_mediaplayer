// import React from 'react'
import Add from './components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import View from './components/View'
import Catagory from './components/Catagory'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Home() {
  const [addVideoStatus, setAddVideoStatus]=useState([])
  const [dragOut,setDragOut]=useState(false)
  return (
    <>
    <div className='d-flex p-5'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <h5 className='ms-auto fs-1'> <Link style={{textDecoration:'none'}} to={'/Watchhistory'}> <span className='hide'>Watch history</span><FontAwesomeIcon icon={faClock} style={{color: "#74C0FC",}} /></Link></h5>
     
    </div>
    <div className="row w-100">
      <div className="col-md-9 mb-2">
        <View addVideoStatus={addVideoStatus} setDragOut={setDragOut}/>

      </div>
      <div className="col-md-3">
        <Catagory dragOut={dragOut} setDragOut={setDragOut} />

      </div>
    </div>





    </>
  )
}

export default Home