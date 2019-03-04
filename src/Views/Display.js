import React from 'react'
import { Card, Button, CardTitle, CardText, Container, Row, Col,ListGroupItem,ListGroup,CardBody,CardImg } from 'reactstrap';

class Display extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Col xs="auto">
                <Card>
                    <CardBody>
                        <CardImg top width="100%" src={this.props.imagen} alt="Card image cap" ></CardImg>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                        <CardText>${this.props.precio}</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col> 

        )
    }


}

export default Display
