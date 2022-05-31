

import { Button, Modal, Carousel ,Card, Col,Row, Container,ListGroup ,ListGroupItem, Form, CardImg} from 'react-bootstrap';
import styled from "styled-components";
import FileUploadComponent from './FileUploadComponent';
import React, { useEffect, useState } from "react";
import SelectionOptions from './SelectionOptions'
import Scroll from 'react-scroll';
import './App.css'
var Element = Scroll.Element;


const Tags = ['BirdThemed', 'AnimalThemed','War Stamps','Landscape Stamps','Writers and Artists','Commemorative stamps','Definitive stamps','InsectThemed','People on stamps','Stamps on stamps'];


function Body(props) {

  const [addShow, setAddShow] = useState(false);
  const addClose = () => setAddShow(false);
  const addOpen = () => setAddShow(true);

  
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
  
function EditTags(props) {
  console.log(props.Name)
  console.log(props.Year)

  return (
      <Modal  centered size="lg" show={addShow} onHide={addClose}>
      <Modal.Header closeButton>
          <Modal.Title>Edit Stamp</Modal.Title>
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
            <Form.Control placeholder={props.Name} />
          </Form.Group>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Control placeholder={props.Year}/>
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
       
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <Form.Check 
                  key={user}
                  type={'checkbox'}
                  id={`${user}`}
                  label={`${user}`}
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
  );
}





    return (
        <div className="body">
          <Container fluid>
            <Row style={{padding: '0 5%'}}>
              
                <Col className="align-items" style={{padding: '1% 0%'}}>
                    <h2>AnimalThemed Stamps</h2>
                </Col>
                <Col className="align-items" style={{padding: '1% 0%'}} >
                    <Button>See All Stamps in AnimalThemed</Button>
                </Col>
              
            </Row>
          </Container>

            <Carousel>
                <Carousel.Item>
                  <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\dog Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                        {addShow ? <EditTags Name="DogStamp" Year="2010"/>: null}
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\FishStamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary">Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary">Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary">Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary">Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Portugal
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary">Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
            </Carousel>
            
            <div>
                <h1>War Stamps</h1>
            </div>
            

            <Carousel>
                <Carousel.Item>
                  <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col} bg={'danger'}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Stamp Name</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col} bg={'danger'}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col} bg={'danger'}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="logo.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
            </Carousel>


           
        </div>);
}





export default Body