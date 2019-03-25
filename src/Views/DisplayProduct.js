import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import firebase from 'firebase'

function getProfilePicUrl (){
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
  }
class DisplayProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            correo: "",
            nombre: "",
            imagen: "",
            uid: ""
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
       
    delete = () => {
        var noti = firebase.database().ref('compra')
        var data = {
            uid_cliente: this.state.uid,
            nom_cliente: this.state.nombre,
            correo_cliente: this.state.correo,
            foto_cliente: this.state.imagen,
            precio: this.props.precio,
            uid_propietario: this.props.uid_propietario,
            correo_propietario: this.props.propietario,
            juego: this.props.nombre
        }
        noti.push(data)
        
        var product = firebase.database().ref("productos").child(this.props.id)
        
        firebase.firestore().collection('Transaction').add({
            Comprador: this.state.uid,
            FotoComprador: getProfilePicUrl(),
            Vendedor:this.props.uid_propietario,
            CorreoVendedor:this.props.propietario,
            Juego: this.props.nombre,
            Fecha: firebase.firestore.FieldValue.serverTimestamp()
          })
        product.remove()
        
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({nombre: user.displayName})
          this.setState({imagen: user.photoURL})
          this.setState({correo: user.email})
          this.setState({uid: user.uid})
        })
    }

    render(){
       return (
        <Card >
            <CardBody>
                <CardImg top height="50%" width="50%" src={this.props.foto}></CardImg>
                <CardTitle>{this.props.nombre}</CardTitle>
                <CardText>{this.props.descripcion}</CardText>
                <CardText>Precio: ${this.props.precio}</CardText>
                <Button color="success" onClick={this.delete}>Conseguir</Button>
                <br></br><br></br>
                <small className="text-muted">{this.props.propietario}</small>
            </CardBody>
        </Card>
       )
    }
}
export default DisplayProduct;