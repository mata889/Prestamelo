import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from './Profile';
import Home from './Home';
import Prueba from "./Prueba";
import Ventas from "./Ventas";
import firebase from "firebase"
/*import Pagina404 from './Pagina404/Pagina404';
<Route component={Pagina404} />*/
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isSignIn: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            
        })
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert(user.displayName)
            } else {
                alert("false")
            }
          });
        
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
                        <img src="https://cdn.dribbble.com/users/84677/screenshots/635390/hand.jpg" width = "50px" height="35px"/>
                        </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem>   
                                <NavLink href="">Prueba</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Ventas">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Login" onClick={this.handleChange}>Log in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Profile">Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route path="/Home" component={Home}/> 
                    <Route path="/Login" component={Prueba}/>
                    <Route path="/Ventas" component={Ventas}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/" component=""></Route>
                    
                    <Redirect to = "/" component=""></Redirect>
                </Switch>
            </div>
        );
    }
}
export default Header
