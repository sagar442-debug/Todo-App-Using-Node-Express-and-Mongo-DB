import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TodoList from './TodoList';
import AppContext from '../Context/MyContext';

export default function Todo() {
  
  const {todos, setTodos, value, setValue, loading, setLoading, edit, setEdit} = useContext(AppContext)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const getTodo = () => {
    fetch("http://localhost:8000/api/todos")
      .then((response) => response.json())
      .then((response) => setTodos(response))
  }

  const handleUpdate = () => {
    fetch(`http://localhost:8000/api/todos/${edit._id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        title: value,
        status: "completed"
      })
    })
      .then((response) => response.json())
      .then((response) => {
        getTodo()
        setValue('')
      })
      setLoading(false)
      

  }

  const handleSubmit = () => {
    fetch(`http://localhost:8000/api/todos/`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        title: value,
        status: "pending"
      })
    })
      .then((response) => response.json())
      .then((response) => {
        getTodo()
        setValue('')
      })

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
        
      {
        loading== false ? (<Button className='mx-1' onClick={handleSubmit} variant="primary" id="button-addon2">
        Add
      </Button>):(<Button onClick={handleUpdate} variant="primary" id="button-addon2">
          Update
        </Button>)
      }

        
        
      </InputGroup>

      <TodoList />
    </div>
  )
}
