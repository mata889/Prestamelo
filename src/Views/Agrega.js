import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Card, ListGroup, InputGroup, InputGroupAddon, InputGroupText, InputCard, CardImg } from 'reactstrap';
import firebase from 'firebase'
import FileUpload from './FileUpload'
import Notifica from './Notifica'
import Comprados from './Comprados'

import { storage } from "../firebase"

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      price: 0,
      description: "",
      mail: "",
      picture: "",
      uid: "",
      url1: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  ///////////////
  onChange = e => {
    return this.nombreFoto;
  }
  handleChange = e => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }
  handleUpload = () => {
    const { image } = this.state;
    console.log(this.state);
    const uplaodTask = storage.ref(`images/${image.name}`).put(image);
    console.log(uplaodTask)
    uplaodTask.on('state_changed',
      (snapshot) => {
        //progress function
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //completion function
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          this.nombreFoto = url;
          console.log(this.nombreFoto);
          this.setState({ url1:url });
        })
      });
  }

  onChangeURL() {
    this.setState({
      url1: this.url1
    });
  }
  //////////////

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handle = (event) => {
    this.setState({ name: event.target.value })
  }

  handle2 = (event) => {
    this.setState({ description: event.target.value })
  }

  handle3 = (event) => {
    this.setState({ price: event.target.value })
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ uid: user.uid })
      this.setState({ mail: user.email })
    })

  }

  onSubmit = (event) => {
    const nameRef = firebase.database().ref('productos')
    var data = {
      uid: this.state.uid,
      nombre: this.state.name,
      precio: this.state.price,
      descripcion: this.state.description,
      correo: this.state.mail,
      foto: this.state.url1,
    }
    nameRef.push(data)
    this.setState(prevState => ({
      modal: !prevState.modal,
      url1: ""
    }));
  }

  render() {
    return (
      <div>
        <ListGroup flush>
          <Button color="light" onClick={this.toggle}>Agregar Productos</Button>
          <Notifica></Notifica>
          <Comprados></Comprados>
          <Button color="light" tag="a" onClick={() => firebase.auth().signOut()} action>Log out</Button>
        </ListGroup>

        <form onSubmit={this.onFormSubmit}>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Agregar Productos</ModalHeader>
            <ModalBody>

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Nombre: </InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.handle.bind(this)} name="nombre" />
              </InputGroup>

              <br></br>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Descripcion: </InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.handle2.bind(this)} name="descripcion" />
              </InputGroup>

              <br></br>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input onChange={this.handle3.bind(this)} name="precio" placeholder="Amount" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>

              <br></br>
              <Input type="file" onChange={this.handleChange} />
              <Button color="link" size="sm" onClick={this.handleUpload}>Subir</Button>
              <br></br>
              <Card>
                <CardImg top height="50%" width="25%" alt="Subiendo Imagen" src={this.state.url1 || 'http://www.wallpaperama.com/post-images/forums/200903/07p-6606-loading-photo.gif'}></CardImg>
              </Card>
              {/*console.log(this.state.url)*/}
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="success" onClick={this.onSubmit}>Confirmar</Button>{' '}
              <Button color="danger" onClick={this.toggle}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </form>
      </div>
    );
  }
}

export default ModalExample;