import React from 'react';
import { Card,  CardTitle,  Container, Row, Col,ListGroupItem,ListGroup,CardImg,Button } from 'reactstrap';
import {JuegosP} from './JuegosP.json'
import Display from './Display'
import firebase from 'firebase'
import FileUpload from './FileUpload'
import { Route, Switch, Redirect} from "react-router-dom";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          JuegosP,
          nombre: null,
          imagen: null,
          data: null
        }
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({nombre: user.displayName})
        this.setState({imagen: user.photoURL})
        this.setState({data: user.providerData})
      })
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
                                <CardImg src={this.state.imagen}></CardImg>
                                <br></br>
                                <CardTitle><h3>{this.state.nombre}</h3></CardTitle>
                                <ListGroup flush>
                                    <ListGroupItem tag="a" href="/AddProducts" action>Add Product</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Sold Products</ListGroupItem>
                                    <ListGroupItem tag="a" href="#" action>Products on Sale</ListGroupItem>
                                    <Button color="light" tag="a" onClick={() => firebase.auth().signOut()} action>Log out</Button>
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
              <FileUpload></FileUpload>
                 
            </div>
          );
    }
}

export default Profile;

/*Despues de <FileUpload></FileUpload>
                <Switch>
                 <Route path="/AddProducts" component={FileUpload}/> 
                </Switch>
*/