import React from 'react'
import { Card, Button, CardImg,     CardTitle, CardText, Col, CardBody, } from 'reactstrap';
import firebase from 'firebase'

class Display extends React.Component {

    constructor() {
        super()
        this.state = {
            correo: "",
            nombre: "",
            imagen: "",
            uid: ""
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ nombre: user.displayName })
            this.setState({ imagen: user.photoURL })
            this.setState({ correo: user.email })
            this.setState({ uid: user.uid })
        })
    }

    delete = () => {
        var product = firebase.database().ref("productos").child(this.props.id)
        product.remove()
    }

    render() {
        return (
            <Col xs="auto" sm="12">
                <Card>
                    <CardBody>
                        <CardImg top height="10%" width="10%" src={this.props.foto}></CardImg>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                        <CardText>${this.props.precio}</CardText>
                        <Button color="danger" onClick={this.delete}>Eliminar</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Display
