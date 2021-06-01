import React from 'react';
import { Card, Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'


const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <div>
      <Card style={{ width: '18rem', height: "650px", marginTop: "30px", backgroundColor: "red" }}>
        <Card.Img style={{ width: "287px", height: "350px" }} variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <ReactStars
            count={5}
            value={movie.rate}
            //onChange={ratingChanged}
            size={24}
            edit={false}
            activeColor="#ffd700" />
          <Button style={{
            border: "2px solid black", backgroundColor: "black", fontSize: "20px", textDecoration: "inheret"
          }} variant="link"><Link style={{textDecoration: "none", color:"white"}} to={`/description/${movie.id}`}>Trailer</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard
