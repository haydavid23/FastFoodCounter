import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "../../styles/usernav.scss";
import { Context } from "../store/appContext.js";
import { withRouter } from "react-router";

class Usernav extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
								<Dropdown alignRight title="Dropdown right" id="dropdown-menu-align-righ">
									<Dropdown.Toggle variant="info" id="dropdown-basic">
										Profile
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Monthly View</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Weekly View</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item onClick={() => actions.signOut(this.props.history)}>
											Sign Out
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Navbar>
							;
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Usernav.propTypes = {
	onDelete: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(Usernav);
