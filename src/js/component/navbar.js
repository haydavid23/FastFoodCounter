import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<nav className="navbar fixed-top navbar-dark bg-dark mb-5 p-2">
					<div className="container-fluid">
						<Link to="/">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg" />
							<span className="navbar-brand mb-0 h1" id="navb">
								Fast Food Counter
							</span>
							<div id="total2" className="text-white d-inline-block p-2 text-center">
								Total Calories
								<span className="badge badge-light">4</span>
							</div>
						</Link>
						<span className="text-light">Welcome, User!</span>

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
					</div>
				</nav>
			</div>
		);
	}
}

Navbar.propTypes = {
	onDelete: PropTypes.func
};
