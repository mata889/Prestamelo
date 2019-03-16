import React, { Component } from 'react';
import {JuegosP} from './JuegosP.json';
import '../App.css';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Container} from 'reactstrap';
import firebase from 'firebase'

class Ventas extends Component {
    constructor(){
        super();
        this.state = {JuegosP, Temp: []}
    }

    componentWillMount = () => {
        const nameRef = firebase.database().ref('productos')
        nameRef.on('value',(snapshot) => {
          var scores = snapshot.val()
          var keys = Object.keys(scores)
          var arreglo = []
          for (var i=0; i<keys.length;i++){
            var k = keys[i]
            var a = scores[k].precio
            var b =  scores[k].descripcion
            var c = scores[k].nombre
            var d = scores[k].foto
            var arr = {
              "precio": a,
              "descripcion": b,
              "nombre": c,
              "foto": d   
            }   
            arreglo.push(arr)
          }
          this.setState({Temp: arreglo})
        })
      }
  
      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({nombre: user.displayName})
          this.setState({imagen: user.photoURL})
          this.setState({data: user.providerData})
          this.setState({UID: user.uid})
        })
      }

    render(){
        const JuegosP = this.state.Temp.map((JuegosP,i) => {
            return(
                <div className="col-md-4">
                <div className="card mt-4">
                <Card >
                    <CardBody>
                        <CardImg top height="50%" width="50%" src={JuegosP.Imagen}></CardImg>
                        <CardTitle>{JuegosP.nombre}</CardTitle>
                        <CardText>{JuegosP.descripcion}</CardText>
                        <CardText>{JuegosP.precio}</CardText>
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

