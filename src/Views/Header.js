import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

export default class Header extends React.Component {
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
                <Navbar color="primary" light expand="md">
                    <NavbarBrand style={{ color: "white", fontWeight: "bolder", fontSize: "500" }} href="/">

                        PrestamitoTIGO</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Alo</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Productos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">QueVendo?</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">Perfil</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}