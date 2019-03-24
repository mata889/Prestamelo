import React from 'react';
import { Button, Modal, ModalHeader,ListGroup,Col,Card,CardBody,CardText } from 'reactstrap';
import firebase from 'firebase'

class Notificacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      uid: "",
      Temp: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    componentDidMount = () =>{
        firebase.auth().onAuthStateChanged(user => {
            this.setState({uid: user.uid})
            this.setState({mail: user.email})
        })

    }

    componentWillMount = () => {
        const nameRef = firebase.database().ref('compra')
        nameRef.on('value',(snapshot) => {
          var scores = snapshot.val()
          var keys = Object.keys(scores)
          var arreglo = []
          for (var i = 0; i < keys.length; i++){
            var k = keys[i]
            var arr = {
              "nom_cliente": scores[k].nom_cliente,
              "nom_juego": scores[k].juego,
              "imagen": scores[k].foto_cliente,
              "uid_propietario": scores[k].uid_propietario 
            }   
            arreglo.push(arr)
          }
          this.setState({Temp: arreglo})
        })
    }

  render() {
    const noti = this.state.Temp.map((Temp,i) => {
        return(
            Temp.uid_propietario === this.state.uid ?
            <Col xs="auto" sm="12">
                <Card>
                    <CardBody>
                        <CardText><img alt="" width="50px" height="50px" src={Temp.imagen}/> {Temp.nom_cliente} quiere adquirir tu juego {Temp.nom_juego}!</CardText>
                        
                    </CardBody>
                </Card>
            </Col> 
            : null
        )
    })
    return (
      <div>
          <ListGroup>
            <Button color="light" onClick={this.toggle}>Notificaciones</Button> 
          </ListGroup>
                               
        <form onSubmit={this.onFormSubmit}>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Notificaciones</ModalHeader>
          {noti}   
        </Modal>
        </form>
      </div>
    );
  }
}

export default Notificacion;