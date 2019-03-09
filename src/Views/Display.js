import React from 'react'
import { Card, Button, CardTitle, CardText, Container, Row, Col,ListGroupItem,ListGroup,CardBody,CardImg } from 'reactstrap';

class Display extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Col xs="auto" sm="12">
                <Card>
                    <CardBody>
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
