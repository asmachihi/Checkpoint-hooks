import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap'

export default function Add({ajoutFilm}) {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [img,setImg]=useState("")
    const [rate,setRate]=useState(1)

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="button" variant="primary" onClick={handleShow}>
       Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Ajouter un film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="form">
                Titre:<input className="input" type="text"onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
                Description: <input className="input" type="text" onChange={(e)=>setDesc(e.target.value)}/><br/><br/>
                URL:<input className="input" type="text" onChange={(e)=>setImg(e.target.value)}/><br/><br/>
                Rating: <input className="input" type="text" onChange={(e)=>setRate(e.target.value)} /><br/><br/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="button" variant="primary" onClick={()=>{ajoutFilm({id:Math.random(),title,desc,img,rate});handleClose()}}>
            Ajout
          </Button>
          <Button className="button" variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



