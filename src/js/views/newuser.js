import React from "react";
import Modal from "../component/modallogin";
import { Tableuser } from "../component/tableuser.js";
import "../../styles/newuser.scss";
import { Context } from "../store/appContext.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Mainnav } from "../component/mainnav.js";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class New extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			showModal: false,
			name: "",
			last_name: "",
			email: "",
			password: "",
			address: "",
			city: "",
			state: "",
			zip_code: "",
			username: "",
			validated: false
		};
	}

	handleSubmit(event) {
		const form = event.currentTarget;
		console.log(event);

		if (form.checkValidity() === true) {
			console.log(form.checkValidity());
			event.preventDefault();
			event.stopPropagation();
			this.props.history.push("/");
		}

		//	this.setState({ validated: true });

		// event.currentTarget.map(item => {
		// 	if (item.defaultValue == !"") {
		// 		this.props.history.push("/");
		// 	}
		// });
	}

	render() {
		const { validated } = this.state;
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<Mainnav onDelete={() => this.setState({ showModal: true })} />
								<br />
								<br />
								<br />
								<br />
								<Modal
									show={this.state.showModal}
									onClose={() => this.setState({ showModal: false })}
								/>
								<h1 className="text-center">REGISTER NOW!</h1>
								<Form
									className="bg-dark text-white w-50 mx-auto p-4"
									id="register"
									validated={validated}
									onSubmit={e => this.handleSubmit(e)}>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridname">
											<Form.Label>Name</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Enter Name"
												onChange={e => this.setState({ name: e.target.value })}
												value={this.state.name}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your Name.
											</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridlast_name">
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Enter Last Name"
												onChange={e => this.setState({ last_name: e.target.value })}
												value={this.state.last_name}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your Last Name.
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridemail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												required
												type="email"
												placeholder="Enter email"
												onChange={e => this.setState({ email: e.target.value })}
												value={this.state.email}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your Email.
											</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridpassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												required
												type="password"
												placeholder="Password"
												onChange={e => this.setState({ password: e.target.value })}
												value={this.state.password}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your password.
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridusername">
										<Form.Label>Username</Form.Label>
										<Form.Control
											required
											placeholder="Username"
											type="text"
											onChange={e => this.setState({ username: e.target.value })}
											value={this.state.username}
										/>
										<Form.Control.Feedback type="invalid">
											Please Type an Username.
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group controlId="formGridaddress">
										<Form.Label>Address </Form.Label>
										<Form.Control
											required
											placeholder="Apartment, studio, or floor"
											type="text"
											onChange={e => this.setState({ address: e.target.value })}
											value={this.state.address}
										/>
										<Form.Control.Feedback type="invalid">
											Please Type Your Address.
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridcity">
											<Form.Label>City</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="City"
												onChange={e => this.setState({ city: e.target.value })}
												value={this.state.city}
											/>
											<Form.Control.Feedback type="invalid">
												Please Select your City.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="invalid">
												Please Type a City.
											</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridstate">
											<Form.Label>State</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="State"
												onChange={e => this.setState({ state: e.target.value })}
												value={this.state.state}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your State.
											</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridzip_code">
											<Form.Label>Zip</Form.Label>
											<Form.Control
												required
												type="text"
												onChange={e => this.setState({ zip_code: e.target.value })}
												value={this.state.zip_code}
											/>
											<Form.Control.Feedback type="invalid">
												Please Type Your Zip-code.
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Button
										variant="primary"
										type="submit"
										onClick={() =>
											actions.newUser(
												this.state.name,
												this.state.last_name,
												this.state.email,
												this.state.password,
												this.state.address,
												this.state.city,
												this.state.state,
												this.state.zip_code,
												this.state.username,
												this.state.validated,
												this.props.history
											)
										}>
										Submit
									</Button>
								</Form>
								;
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

New.propTypes = {
	history: PropTypes.object
};

export default withRouter(New);
