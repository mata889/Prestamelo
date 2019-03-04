import React from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col,ListGroupItem,ListGroup,CardBody } from 'reactstrap';
import {productos} from '../data/productos.json'
import Display from './Display'

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = { 
          productos
        }
      }

    render(){
        const productos = this.state.productos.map((productos,i) => {
            return (
              <div className="row mt-4">      
                <Display precio={productos.precio} description={productos.descripcion} name={productos.name} disponibilidad={productos}></Display>
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
                        {productos}                
                    </Col>
                </Row>   
                </Container>   
            </div>
          );
    }
}

export default Profile;