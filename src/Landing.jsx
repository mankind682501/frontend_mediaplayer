// import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
    <Row className='mt-5'>
      <Col md={1}></Col>
      <Col md={5} className='p-3'>
      <h3 className='text-secondary'>Welcome to <span className='text-warning'>Media player</span></h3>

      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique. In beatae magni assumenda rerum nemo esse velit eaque, nobis similique nisi cupiditate, ex necessitatibus inventore! Ducimus odio laborum suscipit.z Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ut voluptatibus rem dolorem quo est perspiciatis placeat beatae mollitia itaque, aperiam tempora repellat nihil numquam repellendus blanditiis veniam exercitationem in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore placeat ratione, ullam quam officia laborum vel ipsa animi accusantium repudiandae voluptatibus quae aliquam commodi dolorem et nobis consectetur saepe nesciunt!Lorem</p>
      <Link to={'/Home'}><button className='btn btn-warning rounded mt-3 mb-3'>Get started</button></Link>
      </Col>
      <Col md={5} className='d-flex justify-content-center align-items-center p-3 mb-3'>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW13emh6bGVzM21xZ2hwZ281eXF0MDNhbnJhYnl1YWJlYm00OTJoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XGbfacwWVO9J34OSBL/giphy.webp" alt="no image" className='w-100'/>
      </Col>
      <Col md={1}></Col>

    </Row>

    <div className='container'>
      <h3 className='text-center my-5 fs-1 text-warning'>Features</h3>
    <Row>
      <Col md={1}></Col>
      
      <Col md={3}>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      

      </Col>
      <Col md={4} className='d-flex justify-content-center px-4'>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/lEvOjJj7SUEAAAAC/music-artic.gif" height={'230px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
      <Col md={3}>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/l2SpZvhMicR8zUhxe/source.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
      
  



      
      
      <Col md={1}></Col>
    </Row>
    <div className='container-fluid my-5'>
     <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 border border-secondary p-3 border-2 rounded">
        <div className="row p-4">
          <div className="col-md-6 pe-4">
            <h1 className='fs-2 text-warning mb-3 '>Simple fast and powerful</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro rem quisquam est fugiat neque eaque, perspiciatis laudantium molestias aut iusto exercitationem quidem minima voluptate voluptatum, nisi vel a. Non!</p>
            <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore officia laudantium pariatur cumque qui placeat vero, beatae ad nihil asperiores perferendis et sit quisquam autem adipisci nemo, totam nisi!</p>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ab nisi cumque dolorum commodi natus numquam quasi repellat facilis odit reprehenderit, est iure officia! Tenetur odit id quasi laborum!</p>

          </div>
          <div className="col-md-6">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q0nhJ3_fpIc" title="Tomorrowland Winter 2019 | Official Aftermovie"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>

          </div>
        </div>

      </div>
      <div className="col-md-1"></div>
     </div>

    </div>

    </div>
    </>
  )
}

export default Landing