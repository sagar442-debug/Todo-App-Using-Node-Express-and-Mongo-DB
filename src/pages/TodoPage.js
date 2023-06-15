import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

export default function TodoPage() {
    const {todoId} = useParams()
    
    console.log(todoId)

    const [todos, setTodos] = useState([])
    const getTodo = () => {
        fetch(`http://localhost:8000/api/todos/${todoId}`)
            .then((response) => response.json())
            .then((response) => setTodos(response))
    }

    useEffect(() => {
        getTodo()
    }, [])
    
    return (
        <div>
            <ListGroup>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{todos.title}</div>
                        {todos.status}
                    </div>

                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
