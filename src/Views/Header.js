import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from "reactstrap";
import { Route, Switch, Redirect} from "react-router-dom";
import Profile from './Profile';
import Home from './Home';
import Prueba from "./Prueba";
import Productos from "./Productos";
import firebase from "firebase"
/*import Pagina404 from './Pagina404/Pagina404';
<Route component={Pagina404} />*/

const fakeAuth = {
    isAuthenticated: true,
    authenticate() {
      this.isAuthenticated = true
      alert('True')
    },
    signout() {
      this.isAuthenticated = false
    }
  }
  
  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props)=>(
        fakeAuth.isAuthenticated === true ?
        <Component {...props}></Component>
        :<Redirect to ='/Login' />
    )}/>
  )

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

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user === true){
                this.setState({ isSignedIn: !!user }) 
                fakeAuth.authenticate()
            }else{
                this.setState({ isSignedIn: !!user })  
            }      
        })
      }
    
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
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
                                <NavLink href="/Products">Products</NavLink>
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
                    <PrivateRoute path="/Products" component={Productos}/>
                    <PrivateRoute path="/Profile" component={Profile}/>
                    <Route path="/" component=""></Route>
                    <Redirect to = "/" component=""></Redirect>
                </Switch>
            </div>
        );
    }
}
export default Header
