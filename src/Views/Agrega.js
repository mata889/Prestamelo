import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ListGroup,InputGroup,InputGroupAddon,InputGroupText,Input } from 'reactstrap';
import firebase from 'firebase'
import FileUpload from './FileUpload'

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
      uid: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    handle = (event) =>{
        this.setState({name: event.target.value})
    }

    handle2 = (event) =>{
        this.setState({description: event.target.value})
    }

    handle3 = (event) =>{
        this.setState({price: event.target.value})
    }

    componentDidMount = () =>{
        firebase.auth().onAuthStateChanged(user => {
            this.setState({uid: user.uid})
            this.setState({mail: user.email})
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
            foto: this.state.picture,
        }
        nameRef.push(data)
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }

  render() {
    return (
      <div>
        <ListGroup flush>  
            <Button color="light" onClick={this.toggle}>Add Product</Button>                        
            <Button color="light" tag="a" onClick={() => firebase.auth().signOut()} action>Log out</Button>
        </ListGroup>

        <form onSubmit={this.onFormSubmit}>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Product</ModalHeader>
          <ModalBody>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Name: </InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.handle.bind(this)} name="nombre"/>
            </InputGroup>

            <br></br>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Description: </InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.handle2.bind(this)} name="descripcion"/>
            </InputGroup>

            <br></br>
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input onChange={this.handle3.bind(this)} name="precio" placeholder="Amount" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>

            <br></br>
            <FileUpload></FileUpload>

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success" onClick={this.onSubmit}>Confirm</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </form>
      </div>
    );
  }
}

export default ModalExample;