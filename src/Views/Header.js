import React from "react";
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Prueba from "./Prueba";
import Products from "./Products";
import firebase from 'firebase'


var storage = firebase.storage();

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isSignIn: false,
            redirectToReferrer: false,
            search: "",
            Temp: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: "/search/" + event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.search);
        event.preventDefault();
    }

    componentDidMount = () => {
        const nameRef = firebase.database().ref('productos')
        nameRef.on('value', (snapshot) => {
            var scores = snapshot.val()
            var keys = Object.keys(scores)
            var arreglo = []
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i]
                var a = scores[k].precio
                var b = scores[k].descripcion
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
            this.setState({ Temp: arreglo })
        })
        
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/Home"><img alt="imagen" src={require("./Imagenes/control.png")} width="60px" height="50px" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/Products">Productos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Profile">Perfil</NavLink>
                                </NavItem>
                                <form class="form-inline" action="/action_page.php" onSubmit={this.handleSubmit}>
                                    <input class="form-control mr-sm-2" name="search" type="text" placeholder="Search" onChange={this.handleChange} />
                                    <li class="nav-item active">
                                        <a class="nav-link" href={this.state.search} className="buttn2">Search</a>
                                    </li>
                                </form>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Login" component={Prueba} />
                    <Route path="/Products" component={Products} />
                    <Route path="/Profile" component={Prueba} />
                    <Route path="/search/:ser" render={
                        ({ match }) => {
                            const Temp = this.state.Temp.map((todos, i) => {
                                return (
                                            (todos.nombre.includes(match.params.ser)) ?
                                                <div className="col-md-4">
                                                    <div className="card mt-4">
                                                        <Card >
                                                            <CardBody>
                                                                <CardImg top height="50%" width="50%" src={todos.Imagen}></CardImg>
                                                                <CardTitle>{todos.nombre}</CardTitle>
                                                                <CardText>{todos.descripcion}</CardText>
                                                                <CardText>{todos.precio}</CardText>
                                                                <Button color="success">Get</Button>
                                                            </CardBody>
                                                        </Card>
                                                    </div>
                                                </div>
                                                : ""
                                )
                            })
                            return (
                                <div className="container">
                                    <div className="row mt-4">
                                        {Temp}
                                    </div>
                                </div>
                            )
                        }
                    } />
                </Switch>
            </div>
        );
    }
}
export default Header
