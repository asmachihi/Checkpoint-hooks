import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Components.css'



export default function MovieCard({movie}) {
    
    return (
            
            <div className="Card">
              <Link to={`/${movie.id}`}>
            <Card style={{ width: '18rem',color: '#495057'}}>
            <Card.Img variant="top" src={movie.img} className="img" />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text> {movie.desc}</Card.Text>
                <Card.Text>{"🌟".repeat(movie.rate)}</Card.Text>
                <Link to={`/${movie.id}`}><Button className="button" variant="primary">Voir le Film</Button></Link>
              </Card.Body>
            </Card>
            </Link>
            </div>
            
       
    )
}
