import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
 <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <h5 className='text-warning fs-2'>
            <FontAwesomeIcon icon={faVideo}  beat className='me-3'/>
              Mediaplayer
            </h5>
            
           
          </Navbar.Brand>
        </Container>
      </Navbar>



   
  )
}

export default Header