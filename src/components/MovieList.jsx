import { Card, Col, Row } from "react-bootstrap";
  
  function MovieList({ data }) {
    return (
      <>
        {data && (
          <Row>
            {data.data.results.map((movie) => (
              <Col className='d-flex'>
                <Card
                  border='dark'
                  style={{ width: '18rem' }}
                  key={movie.id}
                  className='bg-dark text-white overlay overlay-hover m-2'
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
  
  export default MovieList;