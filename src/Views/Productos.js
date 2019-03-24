import React, { Component } from 'react';
import {JuegosP} from './JuegosP.json';
import '../App.css';
import {Container} from 'reactstrap';
import firebase from 'firebase'
import DisplayProduct from './DisplayProduct'

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
              "foto": d,
              "id": k,
              "uid_propietario": scores[k].uid,  
              "propietario": scores[k].correo    
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
                    <DisplayProduct nombre={JuegosP.nombre} descripcion={JuegosP.descripcion} precio={JuegosP.precio} id={JuegosP.id} uid_propietario={JuegosP.uid_propietario} propietario={JuegosP.propietario}></DisplayProduct>
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

