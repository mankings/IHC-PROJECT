import React from 'react'
import SelectionOptions from './SelectionOptions'
import { Button, Navbar, Nav, Form, Container,FormControl ,Modal,Col,Row} from 'react-bootstrap'
import './App.css'
import styled from "styled-components";
import { useEffect, useState } from "react";
import FileUploadComponent from './FileUploadComponent';




function Header(props) {




  const [addShow, setAddShow] = useState(false);

  const addClose = () => setAddShow(false);
  const addOpen = () => setAddShow(true);
    return (
        <div className="header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                StampHub
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Button onClick={addOpen}>+ Add Stamp</Button>
                </Nav.Link>
                
                <Nav.Link>
                  <Button> Tags </Button>
                </Nav.Link>

              </Nav>

              <Button className='ms-auto'> Filters </Button>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>

            </Container>
          </Navbar>


{/* Modals    ---------------------------------------------------------------------------------- */}
        
        
        <Modal         size="lg" show={addShow} onHide={addClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Stamp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Row className="mb-3">
                {/* First Collumn of Modal, Image Upload */}
                <Col>

                
                  <FileUploadComponent/>
                
                </Col>
                {/* Second Collum of Modal */}
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Stamp Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter Stamp Name" />
                      <Form.Text className="text-muted">
                        Example: "1977 EUROPA - Landscapes"
                      </Form.Text>
                    </Form.Group>


                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                          <Form.Control placeholder="Year"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Control as="select">
                            <SelectionOptions/>
                          </Form.Control> 
                        </Form.Group>
                    </Row> 
                  </Col>
                </Row>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={addClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={addClose}>
                        Save Stamp
                    </Button>
                </Modal.Footer>
            </Modal>

        
        </div>
    );
}

export default Header