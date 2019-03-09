import React, { Component } from 'react';
import {JuegosP} from './JuegosP.json';
import '../App.css';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container, Row, Col } from 'reactstrap';

class Ventas extends Component {
    constructor(){
        super();
        this.state = {JuegosP}
    }
    render(){
        const JuegosP = this.state.JuegosP.map((JuegosP,i) => {
            return(
                <div className="col-md-4">
                <div className="card mt-4">
                <Card >
                    <CardBody>
                        <CardImg top height="50%" width="50%" src={JuegosP.Imagen}></CardImg>
                        <CardTitle>{JuegosP.Titulo}</CardTitle>
                        <CardText>{JuegosP.Descripcion}</CardText>
                        <CardText>{JuegosP.Renta}</CardText>
                        <Button color="success">Get</Button>
                    </CardBody>
                </Card>
                </div>
                              
                </div>
            )
        })
        
        return(
            <Container>
                <div className="row mt-4">
                    {JuegosP}
                </div>     
            </Container>
            
            
            
        )
    }
        
}
export default Ventas;

