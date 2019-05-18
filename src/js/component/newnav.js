import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
							<div id="totalCal2" className="text-white d-inline-block p-2 text-center">
								Total Burned Calories
								<span className="badge badge-light">1000</span>
							</div>
							<div id="totalCal" className="text-white d-inline-block p-2 text-center">
								Total Calories
								<br /> <span className="badge badge-light">1000</span>
							</div>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				;
			</div>
		);
	}
}
