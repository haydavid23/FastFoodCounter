import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export class Usernav extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect bg="dark" variant="dark" className="fixed-top">
					<Link to="/">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg" />
					</Link>
					<Navbar.Brand href="#home" className="pl-2">
						Fast Food Counter
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" />
					<Dropdown>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							Profile
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Monthly View</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Weekly View</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href="#/action-2" onClick={() => this.props.onDelete()}>
								Sign Out
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar>
				;
			</div>
		);
	}
}

Usernav.propTypes = {
	onDelete: PropTypes.func
};
