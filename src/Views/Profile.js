import React from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col,ListGroupItem,ListGroup,CardBody } from 'reactstrap';
import {JuegosP} from './JuegosP.json'
import Display from './Display'

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = { 
          JuegosP
        }
      }

    render(){
        const JuegosP = this.state.JuegosP.map((JuegosP,i) => {
            return (
              <div className="row mt-4">      
                <Display precio={JuegosP.Renta} description={JuegosP.Descripcion} name={JuegosP.Titulo} imagen={JuegosP.Imagen}></Display>
              </div>
            )
          })

        return (
            <div >
                <Container>
                <Row>
                    <Col xs="auto" sm="4" >
                        <Container>
                        <div className="row mt-4">        
                            <Card body>
                                <CardTitle>My Profile</CardTitle>
                                <CardText>Me gustan los juegos de carrera :v</CardText>
                                <ListGroup flush>
                                    <ListGroupItem tag="a" href="#" action>Add Product</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Sold Products</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Products on Sale</ListGroupItem>
                                </ListGroup>
        
                            </Card>
                        </div>    
                        </Container>
                    </Col>
                    <Col>
                        {JuegosP}                
                    </Col>
                </Row>   
                </Container>   
            </div>
          );
    }
}

export default Profile;
