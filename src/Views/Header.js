import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from './Profile'
import Home from './Home'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="Danger" light expand="md">
                    <NavbarBrand style={{ color: "Grey", fontWeight: "bolder", fontSize: "500" }} href="/Home">
                        PrestamitoTIGO
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Prueba2">Prueba</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Products">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Login">Log in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Profile">Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path="/Home" component={Home}/> 
                    <Route path="/login" component=""/>
                    <Route path="/Products" component=""/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/" component=""></Route>
                    <Redirect to = "/" component=""></Redirect>
                </Switch>
            </div>
        );
    }
}
export default Header
