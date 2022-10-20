import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'

const AddTodo = ({addTodo}) => {
// open/close modal

const [show, setShow]=useState(false)

const handleShow=()=>{
    setShow(!show)
}
// ----------------------
// handleInput value
const [input, setInput] = useState('')
const handleInput=(e)=>{
setInput(e.target.value)
}
// add new todo
const add=()=>{
    let newTodo={text:input,
        id:Math.random()
        
    }
    addTodo(newTodo)
}

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>add nex todo</Modal.Title>
        </Modal.Header>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={input}
          onChange={(e)=>handleInput(e)}
        />
      </InputGroup>     
         <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={add} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTodo