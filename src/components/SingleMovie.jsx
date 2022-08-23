import { Card, Col, Row } from "react-bootstrap";
import { useState, setUseState } from 'react'
  
  function SingleMovie({ data }) {


    return (
      <>
        {data && (
          <Row>
            {data.data.results.map((movie) => (
              <Col className='d-flex'
                    key={movie.id}>
                <Card
                  border='dark'
                  style={{ width: '18rem' }}
                  className='moviecard bg-dark text-white overlay overlay-hover m-2'
                  
                >
                  <Card.Img
                    variant="top"
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                  />
                  

                    <Card.ImgOverlay className='overlay'>
                    <Card.Title>{movie.title}</Card.Title>
                    <div className='card-subtitle mb-2 text-muted'>{movie.release_date}</div>
                    </Card.ImgOverlay>

                
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
  
  export default SingleMovie;