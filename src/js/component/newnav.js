import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export class Newnav extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect bg="dark" variant="dark">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg" />
					<Navbar.Brand href="#home" className="pl-2">
						Fast Food Counter
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" />

					<ButtonToolbar>
						<Button variant="primary" onClick={() => this.props.onDelete()}>
							Login
						</Button>
					</ButtonToolbar>
				</Navbar>
				;
			</div>
		);
	}
}

Newnav.propTypes = {
	onDelete: PropTypes.func
};
