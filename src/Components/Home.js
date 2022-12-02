import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import Card from "../UI/Card"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContent } from '@material-ui/core';
import DialogContentText from "@material-ui/core/DialogContentText";

// const initialState = [
//     {
//         title: "Clean the car",
//         description: "I need to vaccum my car before 5 pm."
//     },
//     {
//         title: "Wash the dog",
//         description: "I need to give Indy a bath before the end of the day."
//     },
//     {
//         title: "Grocery Shopping",
//         description: "I need to pickup milk."
//     },
// ]
const Home = () => {

    const [list, setList] = useState([])
    const [title, setTitle] = useState('');
    const [changedTitle, setChangedTitle] = useState('');
    const [changedDescription, setchangedDescription] = useState('');
    const [description, setDescription] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    function handleChange(event) {
        // track input field's state
        setTitle(event.target.value)
    }

    function handleTitleChange(event) {
        setChangedTitle(event.target.value)
    }

    function handleEditDescription(event) {
        setchangedDescription(event.target.value)
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

    function handleDelete(title) {
        setList(list.filter(function (ele) {
            return ele.title !== title
        }))
    }

    function handleEdit(todo) {
        let i = 0
        let newList = list
        newList.map((item) => {
            if (item.title == todo.title) {
                newList[i].title = changedTitle
                newList[i].description = changedDescription
            }
            ++i
        })

        setOpen(false)
        setList(newList)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>To-Do List</h1>
                    <div>
                        {list.map(todo => (
                            <div>
                                <Card>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.description}</p>
                                    <button onClick={ handleClickToOpen }>Edit</button>
                                    <Dialog open={open} onClose={handleToClose}>
                                        <DialogTitle>Edit Item</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>Title</DialogContentText>
                                            <input type="text" value={changedTitle} onChange={handleTitleChange} placeholder={todo.title}></input>
                                            <DialogContentText>Description</DialogContentText>
                                            <input type="text" value={changedDescription}onChange={handleEditDescription}placeholder={todo.description}></input>
                                        </DialogContent>
                                        <button onClick={() => {handleEdit(todo)}}>Submit</button>
                                    </Dialog>
                                    <button onClick={() => { handleDelete(todo.title) }}>Delete</button>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                    <h1>New Item</h1>
                    <h3>Title</h3>
                    <input type="text" value={title} onChange={handleChange}></input>
                    <h3>Description</h3>
                    <input type="text" value={description} onChange={handleDescriptionChange}></input>
                    <button type="button" disabled={title.length === 0} onClick={handleAdd}>Add</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home