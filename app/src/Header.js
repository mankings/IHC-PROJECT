import React from 'react'
import SelectionOptions from './SelectionOptions'
import { Button, Navbar, Nav, Form, Container,FormControl ,Modal,Col,Row,ListGroup} from 'react-bootstrap'
import './App.css'
import styled from "styled-components";
import { useEffect, useState } from "react";
import FileUploadComponent from './FileUploadComponent';

import Scroll from 'react-scroll';
var Element = Scroll.Element;



const Tags = ['BirdThemed', 'AnimalThemed','War Stamps','Landscape Stamps','Writers and Artists','Commemorative stamps','Definitive stamps','InsectThemed','People on stamps','Stamps on stamps'];


function Header(props) {



  /* Add Modal */
  const [addShow, setAddShow] = useState(false);
  const addClose = () => setAddShow(false);
  const addOpen = () => setAddShow(true);

  /* Tags Modal */
  const [tagsShow, setTagShow] = useState(false);
  const tagClose = () => setTagShow(false);
  const tagOpen = () => setTagShow(true);


  /* Filter System ---------------------- */
  
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(Tags.slice(0,6));
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Tags.filter((tag) => {
        return tag.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Tags.slice(0,6));
      // If the text field is empty, show all users
    }

    setName(keyword);
  };









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
                  <Button onClick={tagOpen}> Tags </Button>
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
        
            {/* Add Stamp Modal ----------------------------------------------------------  */}
        
            <Modal  centered size="lg" show={addShow} onHide={addClose}>
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
                      <Form.Control placeholder="Enter Stamp Name" />
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

                    <Row >
                      <Container>
                        <Element className="element" id="containerElement" style={{
                        height: '200px',
                        }}>
                <div className="container">
                  <Row>
                    <div className="d-flex justify-content-between">
                      <div className='p-2 col-example text-left'>
                        <Form.Group>

                        <Form.Control placeholder="Search Tags" value={name}
                          onChange={filter}
                          className="input"/>

                        </Form.Group>
                      </div>
                      <div className='p-2 col-example text-left'>
                          <Button >Add Tag</Button>
                      </div>
                    </div>
                  </Row>
                  
                  <div className="tag-list">
                  <Form>
                        {foundUsers && foundUsers.length > 0 ? (
                          foundUsers.map((user) => (
                            <Form.Check 
                            type={'checkbox'}
                            id={`${user}`}
                            label={`${user}`}
                          />
                          ))
                        ) : (
                          <h1>No results found!</h1>
                        )}
                    </Form>
                  </div>
                 

                </div>
                        </Element>
                    
                      </Container>
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



              {/* Tags Modal ---------------------------------------------- */}
              <Modal   centered      size="lg" show={tagsShow} onHide={tagClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Tags</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                          <Form.Group>
                          <Form.Control placeholder="Search Tags" value={name}
                            onChange={filter}
                            className="input"/>

                          </Form.Group>
                        </Col>  
                        <Col className=''>
                          <Button >Add Tag</Button>
                        </Col>
                    </Row> 
                  <Container>
                    <Element className="element" id="containerElement" style={{
                            height: '320px',
                            }}>
                            
                        <div className="tag-list">
                          <ListGroup>
                              {foundUsers && foundUsers.length > 0 ? (
                                foundUsers.map((user) => (
                                  <ListGroup.Item id={`${user}`}>
                                    {user}
                                  </ListGroup.Item>
                                ))
                              ) : (
                                <h4>No results found!</h4>
                              )}
                          </ListGroup>
                        </div>
                    </Element>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={tagClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={tagClose}>
                        Save Stamp
                    </Button>
                </Modal.Footer>
            </Modal>
        
        </div>
    );
}

export default Header