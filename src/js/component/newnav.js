import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

export class Newnav extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg" />
					<Navbar.Brand href="#home">Fast Food Counter</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Badge variant="danger">Total Calories Consumed: 1000 </Badge>
							<span> Welcome, User!</span>
							<Badge variant="success">Total Calories Burned: 1000</Badge>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				;
			</div>
		);
	}
}
