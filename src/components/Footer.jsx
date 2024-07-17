// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faTwitter,faFacebook,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className="row w-100 p-3 bg-primary">
      <div className="col-md-4">
      <h5 className='text-warning p-2 mt-2 ms-4'>
        <FontAwesomeIcon icon={faVideo}  beat className='me-3 text-warning'/>
      Media player
      </h5>
      <p style={{textAlign:'justify'}} className='ms-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi corporis ut laboriosam itaque ducimus harum, consequatur voluptatum aspernatur porro! Voluptas numquam rem consectetur velit dolores dolore corrupti id veniam quas.</p>
      </div>
      <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
        <h2 className='mt-2 text-warning'>links</h2>
        <Link style={{textDecoration:'none'}} to={'/'}><p>Landing page</p></Link> 
        <Link style={{textDecoration:'none'}} to={'/Home'}> <p>Home page</p></Link>
        <Link style={{textDecoration:'none'}} to={'/Watchhistory'}><p>Watch history</p></Link>
      </div>
      <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
        <h2 className='mt-2 text-warning'>Guides</h2>
        <p>React</p>
        <p>Bootstrap</p>
        <p>Node</p>

      </div>
      <div className="col-md-4 d-flex justify-content-center">
       <div>
       <h2 className='mt-3 text-warning text-center'>Contact us</h2>
        <div className=' d-flex mt-4'>
          <input type="text" className='form-control' placeholder='email id' />
        <button className='btn btn-warning ms-2 text-center'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-2'>
        <FontAwesomeIcon className='text-success fs-3' icon={faInstagram} style={{color: "#f906ac",}} />
        <FontAwesomeIcon className='text-success fs-3' icon={faTwitter} style={{color: "#e40bf4",}} />
        <FontAwesomeIcon className='text-success fs-3' icon={faFacebook} style={{color: "#ee11d1",}} />
        <FontAwesomeIcon className='text-success fs-3' icon={faLinkedin} style={{color: "#f40bd5",}} />
        <FontAwesomeIcon className='text-success fs-3' icon={faWhatsapp} style={{color: "#cb07f2",}} />
        </div>
       </div>
      </div>

    </div>
   
    </>
  )
}

export default Footer