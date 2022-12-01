import TodoList from "./TodoList"
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
    const initialState = [
        {
            title: "Clean the car",
            description: "I need to vaccum my car before 5 pm."
        },
        {
            title: "Wash the dog",
            description: "I need to give Indy a bath before the end of the day."
        },
        {
            title: "Grocery Shopping",
            description: "I need to pickup milk."
        },
    ]

    const [list, setList] = useState(initialState)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleChange(event) {
        // track input field's state
        setTitle(event.target.value)
      }
      
      
    function handleDescriptionChange(event) {
        // track input field's state
        setDescription(event.target.value)
      }

      function handleAdd() {
        const newList = list.concat({ title, description, id: uuidv4() });
        setList(newList);
        setTitle('');
        setDescription('')
      }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>To-Do List</h1>
                    <TodoList list={list} setList={setList}></TodoList>
                </Col>
                <Col>
                    <h1>New Item</h1>
                    <h3>Title</h3>
                    <input type="text"value={title} onChange={handleChange}></input>
                    <h3>Description</h3>
                    <input type="text"value={description} onChange={handleDescriptionChange}></input>
                    <button type="button" disabled={title.length === 0} onClick={handleAdd}>Add</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home