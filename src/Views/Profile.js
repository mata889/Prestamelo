import React from 'react';
import { Card,  CardTitle,  Container, Row, Col,CardImg } from 'reactstrap';
import {JuegosP} from './JuegosP.json'
import Display from './Display'
import firebase from 'firebase'
import Agregar from './Agrega'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
          JuegosP,
          Tempo: [],
          nombre: null,
          imagen: null,
          data: null,
          UID: null
        }
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
          var e = scores[k].uid
          var arr = {
            "precio": a,
            "descripcion": b,
            "nombre": c,
            "foto": d,
            "uid": e
          }   
          arreglo.push(arr)
        }
        this.setState({Tempo: arreglo})
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
        const JuegosP = this.state.Tempo.map((JuegosP,i) => {       
            return (
              JuegosP.uid === this.state.UID ?
              <div className="row mt-4">   
                <Display precio={JuegosP.precio} description={JuegosP.descripcion} name={JuegosP.nombre} imagen={JuegosP.foto}></Display>
              </div>
              : ""
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
                               <Agregar></Agregar>
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

/*Despues de <FileUpload></FileUpload>
                <Switch>
                 <Route path="/AddProducts" component={FileUpload}/> 
                </Switch>
*/