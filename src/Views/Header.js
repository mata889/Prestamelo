import React from "react";
import {Container,Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown} from "reactstrap";
import { Route, Switch, Redirect} from "react-router-dom";
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
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        
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
                        <NavbarBrand href="/Home"><img alt="imagen"src={require("./Imagenes/control.png")} width = "60px" height="50px"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>   
                                    <NavLink href="#">Prueba</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Products">Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Profile" onClick={this.handleChange}>Profile</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <Route path="/Home" component={Home}/> 
                    <Route path="/Login" component={Prueba}/>
                    <Route path="/Products" component={Products}/>
                    <Route path="/Profile" component={Prueba}/>
                </Switch>
            </div>
        );
    }
}
export default Header
