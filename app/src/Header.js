import React from 'react'
import SelectionOptions from './SelectionOptions'
import { Button, Navbar, Nav, Form, Container, FormControl, Modal, Col, Row, ListGroup } from 'react-bootstrap'
import './App.css'
import './index.css'

import Slider from '@mui/material/Slider';
import styled from "styled-components";
import { useEffect, useState } from "react";
import FileUploadComponent from './FileUploadComponent';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Scroll from 'react-scroll';
var Element = Scroll.Element;



const definedTags = ['BirdThemed', 'AnimalThemed', 'War Stamps', 'Landscape Stamps', 'Writers and Artists', 'Commemorative stamps', 'Definitive stamps', 'InsectThemed', 'People on stamps', 'Stamps on stamps'];


function Header(props) {

  /* Dropdown Menu */
  const [dropOpen, SetDropDown] = useState(false);


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
  const [tags, setTags] = useState(definedTags.slice(0, 6));
  const [foundTags, setFoundTags] = useState(definedTags.slice(0, 6));
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = tags.filter((tag) => {
        return tag.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTags(results);
    } else {
      setFoundTags(tags);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  /* Tag Management ---------------------- */
  const deleteTag = (t) => {
    let newTags = [];
    let newFoundTags = [];

    for (let i = 0; i < tags.length; i++) {
      if (tags[i] !== t) {
        newTags.push(tags[i]);
      }
    }

    for (let i = 0; i < foundTags.length; i++) {
      if (foundTags[i] !== t) {
        newFoundTags.push(foundTags[i]);
      }
    }

    setFoundTags(newFoundTags);
    setTags(newTags);
  }

  const addTag = (t) => {
    if (tags.includes(t)) return;

    let newTags = tags;
    newTags.push(t);

    let newFoundTags = foundTags;
    newFoundTags.push(t);

    setFoundTags(newFoundTags);
    setTags(newTags);
  }


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

          <Button className='ms-auto' onClick={() => SetDropDown(!dropOpen)}> Filters </Button>
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

      <Modal centered size="lg" show={addShow} onHide={addClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stamp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              {/* First Collumn of Modal, Image Upload */}
              <Col>


                <FileUploadComponent />

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
                    <Form.Control placeholder="Year" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select">
                      <SelectionOptions />
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
                                  className="input" />
                              </Form.Group>
                            </div>
                            <div className='p-2 col-example text-left'>
                              <Button onClick={() => addTag(name)} >Add Tag</Button>
                            </div>
                          </div>
                        </Row>
                        <div className="tag-list">
                          {foundTags && foundTags.length > 0 ? (
                            foundTags.map((tag) => (
                              <Form.Check
                                type={'checkbox'}
                                id={`${tag}`}
                                label={`${tag}`}
                              />
                            ))
                          ) : (
                            <h1>No results found!</h1>
                          )}

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
      <Modal centered size="lg" show={tagsShow} onHide={tagClose}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={10}>
              <Form.Group>
                <Form.Control placeholder="Search/Add Tags" value={name}
                  onChange={filter}
                  className="input" />

              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button onClick={() => addTag(name)}>Add Tag</Button>
            </Col>
          </Row>
          <Container>
            <Element className="element" id="containerElement" style={{
              height: '320px',
              overflow: 'scroll'
            }}>

              <div className="tag-list">
                <ListGroup>
                  {foundTags && foundTags.length > 0 ? (
                    foundTags.map((tag) => (
                      <ListGroup.Item id={`${tag}`}>
                        <Row>
                          <Col xs={14} md={8}>
                            <span>{tag}</span>
                          </Col>

                          <Col xs={2} md={1}>
                            <Button>
                              <FaRegEdit />
                            </Button>
                          </Col>
                          <Col xs={2} md={1}>
                            <Button onClick={() => deleteTag(tag)}>
                              <FaRegTrashAlt />
                            </Button>
                          </Col>
                        </Row>
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



      {dropOpen && <Dropdown />}
    </div>
  );
}





function Dropdown() {

  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;


  const [value1, setValue1] = React.useState([1500, 2022]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  }

  const marks = [
    {
      value: 0,
      label: '1500',
    },
    {
      value: 50,
      label: '1761',
    },
    {
      value: 100,
      label: '2022',
    },
  ];





  const [name, setName] = useState('');
  const [foundTags, setFoundTags] = useState(definedTags);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = definedTags.filter((tag) => {
        return tag.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTags(results);
    } else {
      setFoundTags(definedTags.slice(0, 6));
      // If the text field is empty, show all users
    }

    setName(keyword);
  };





  return (
    <div className='dropdown'>

      <h5>Year</h5>


      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks}
      />
      <hr></hr>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Control as="select">
          <SelectionOptions />
        </Form.Control>
      </Form.Group>
      <hr></hr>
      <Container>
        <Element
          className="element" id="containerElement" style={{
            height: '300px',
            overflow: 'scroll',
          }}
        >
          <div className="tag-list divTags"  >

            {foundTags && foundTags.length > 0 ? (
              foundTags.map((tag) => (
                <Form.Check
                  type={'checkbox'}
                  id={`${tag}`}
                  label={`${tag}`}
                />
              ))
            ) : (
              <h1>No results found!</h1>
            )}

          </div>
        </Element>
      </Container>
    </div>
  );
}

export default Header