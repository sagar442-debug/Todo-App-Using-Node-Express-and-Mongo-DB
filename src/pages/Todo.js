import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TodoList from './TodoList';

export default function Todo() {
  const [value, setValue] = useState("");

  const handleChange = (event) =>{
    setValue(event.target.value)
    console.log(value)
  }

  



  return (
    <div className='container mt-4'>
      <InputGroup className="mb-3">
        <Form.Control
        value={value}
        onChange={handleChange}
          placeholder="Enter something..."
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Add
        </Button>
      </InputGroup>

      <TodoList/>
    </div>
  )
}
