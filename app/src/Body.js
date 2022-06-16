

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

  const [FullScreenModal, setFullScreenModal] = useState(false);

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
                    <h2>All Stamps</h2>
                </Col>
                <Col className="align-items" style={{padding: '1% 0%'}} >
                    <Button onClick={() => setFullScreenModal(true)}>See All Stamps</Button>
                </Col>
              
            </Row>
          </Container>

            <Carousel>
                <Carousel.Item>
                  <Row style={{padding: '0 5%'}}>
                  <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\Marshall Islands.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>World War II Invasion of Russia</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1991
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Marshall Islands
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\dog Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Atelier Acácio Santos Animal Abandonment</Card.Title>
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
                        {addShow ? <EditTags Name="Grey Kangaroo, Australian Animal series" Year="2010"/>: null}
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\antigua.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Antigua - Canons </Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1978
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United Kingdom 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>10 International Year of Biodiversity Panda</Card.Title>
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
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\frog.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>European Common Frog (Rana temporaria)</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2019
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Russia 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\falkland-islands-penguin.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Centenary 5s black and yellow-orange penguin </Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1933
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Falkland Islands
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\sierraLeone.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>END OF WORLD WAR II 50TH ANV</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1995  
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: SIERRA LEONE
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\pearlharbor.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>JAPANESE BOMB PEARL HARBOR Remembrance Day</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1941 
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United States
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
            </Carousel>
            
          <br></br>


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
                      <Card.Img  variant="top" src="AnimalThemed\australia-circa-2015-a-stamp-printed-in-australia-shows-the-grey-kangaroo-australian-animal-series-circa-2015-RTBYFR.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Grey Kangaroo, Australian Animal series</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2015
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Australia
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                        {addShow ? <EditTags Name="Grey Kangaroo, Australian Animal series" Year="2010"/>: null}
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\dog Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Atelier Acácio Santos Animal Abandonment</Card.Title>
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
                        {addShow ? <EditTags Name="Grey Kangaroo, Australian Animal series" Year="2010"/>: null}
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\FishStamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>10 International Year of Biodiversity Thunnus thynnus</Card.Title>
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
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Panda Stamp.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>10 International Year of Biodiversity Panda</Card.Title>
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
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\frog.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>European Common Frog (Rana temporaria)</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2019
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Russia 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\falkland-islands-penguin.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Centenary 5s black and yellow-orange penguin </Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1933
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Falkland Islands
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\Footbal chita.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>2010 Football World Cup</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2010
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: South Africa
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="AnimalThemed\stock-photo-mauritius-circa-a-postage-stamp-from-mauritius-shows-a-blue-swordfish-marlin-with-a-2110793873.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Mauritius</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1969  
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United Kingdom
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
            </Carousel>
            
          <br></br>

          <Container fluid>
            <Row style={{padding: '0 5%'}}>
              
                <Col className="align-items" style={{padding: '1% 0%'}}>
                    <h2>War Stamps</h2>
                </Col>
                <Col className="align-items" style={{padding: '1% 0%'}} >
                    <Button>See All Stamps in War Themed</Button>
                </Col>
              
            </Row>
          </Container>

          

            <Carousel>
                <Carousel.Item>
                  <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\antigua.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Antigua - Canons </Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1978
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United Kingdom 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\EndOFWW2.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>End of world war II s/s</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1995
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Uzbekistan 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                        {addShow ? <EditTags Name="DogStamp" Year="2010"/>: null}
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\Biplane Heavy Bomber.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>RAF Biplane Heavy Bomber Aircraft</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1993
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United Kingdom 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\Russion Missile Launcher.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>Russian SS-1 SCUD-B Mobile Ballistic Missile Launcher</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1990 
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Iraq 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row style={{padding: '0 5%'}}>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\Marshall Islands.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>World War II Invasion of Russia</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1991
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Marshall Islands
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\sierraLeone.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>END OF WORLD WAR II 50TH ANV</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1995  
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: SIERRA LEONE
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\WW2 Peace Ireland.png" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>World war II-Peace</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 2000
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: Ireland 
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem'}} as={Col}>
                      <Card.Img  variant="top" src="War Themed\pearlharbor.jpg" style={{height: '10rem'}} />
                      <Card.Body>
                        <Card.Title>JAPANESE BOMB PEARL HARBOR Remembrance Day</Card.Title>
                        <ListGroup className="list-group-flush" >
                          <ListGroupItem>
                            Year: 1941 
                          </ListGroupItem>
                          <ListGroupItem>
                            Country: United States
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                      <Card.Body>
                        <Button variant="primary" onClick={addOpen}>Edit Stamp</Button>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
            </Carousel>








      <Modal show={FullScreenModal} onHide={() => setFullScreenModal(false)} className='my-modal' >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>




           
        </div>);
}





export default Body