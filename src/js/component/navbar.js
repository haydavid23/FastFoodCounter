import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import Dropdown from "react-bootstrap/Dropdown";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<nav className="navbar navbar-dark bg-dark mb-5 p-2">
					<div className="container">
						<Link to="/">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg" />
							<span className="navbar-brand mb-0 h1" id="navb">
								Fast Food Counter
							</span>
						</Link>
						<span className="text-light">Welcome, User!</span>

						<i className="far fa-user ml-auto p-3" id="user">
							{" "}
							Logout{" "}
						</i>

						<Dropdown>
							<Dropdown.Toggle variant="info" id="dropdown-basic">
								Dropdown Button
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</nav>
			</div>
		);
	}
}
