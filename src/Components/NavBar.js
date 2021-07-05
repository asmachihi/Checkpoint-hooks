import React from 'react'
import { Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'


export default function NavBar({setInput,setSearchRate}) {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating);
  };


    return (
        <div>
             <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Movie Card</Navbar.Brand>
              <Nav className="mr-auto">
                <Link to="/"><Nav.Link href="#home">Acceuil</Nav.Link></Link>
              
              </Nav>
              <Form inline>
              <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
              />
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setInput(e.target.value)}/>
              </Form>
            </Navbar>
            <br />
        </div>
    )
}
