import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const getTodo = () => {
        fetch("http://localhost:8000/api/todos")
            .then((response) => response.json())
            .then((response) => setTodos(response))
    }

    useEffect(() => {
        getTodo()
    }, [])

    const handleDelete = (todoId) =>{
        // const filteredData = todos.filter((todo)=> todo._id !== todoId)
        fetch(`http://localhost:8000/api/todos/${todoId}`,{
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((response) => {
                getTodo()
            })
        
    }



    return (
        <div>
            {todos.map((todo) => {
                            
                return (
                    
                    <div key={todo._id} className=''>
                        <ListGroup>

                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                
                                <div className="ms-2 me-auto">
                                <Link to={`/todo/:todo._id`}>
                                    <div className="fw-bold">{todo.title}</div>
                                    
                                    </Link>
                                    {todo.status}
                                </div>
                                <Button onClick={()=>handleDelete(todo._id)} variant="danger">
                                    X
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                )
            })}


        </div>
    )
}
