import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Form from './Form';



export default function Update()
{

    const [show, setShow] = useState();
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Edit</Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title> Edit Users</Modal.Title>
                </Modal.Header>

                <Modal.Body> 

                    <Form />

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}> close</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}
