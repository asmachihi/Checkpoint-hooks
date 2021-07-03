import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './Components.css'



export default function MovieCard({movie}) {
    
    return (
        
            <div className="Card">
            <Card style={{ width: '18rem',color: '#495057'}}>
            <Card.Img variant="top" src={movie.img} className="img" />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text> {movie.desc}</Card.Text>
                <Card.Text>{"🌟".repeat(movie.rate)}</Card.Text>
                <Button className="button" variant="primary"><a href={movie.url}>Voir le Film</a></Button>
              </Card.Body>
            </Card>
            </div>
            
       
    )
}
