import React from "react";
import { Tableuser } from "../component/tableuser.js";
import "../../styles/newuser.scss";
import { Context } from "../store/appContext.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Mainnav } from "../component/mainnav.js";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export class New extends React.Component {
	constructor() {
		super();
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
			username: ""
		};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<Mainnav />
								<br />
								<br />
								<br />
								<br />
								<h1 className="text-center">REGISTER NOW!</h1>
								<Form className="bg-dark text-white w-50 mx-auto p-4" id="register">
									<Form.Row>
										<Form.Group as={Col} controlId="formGridname">
											<Form.Label>Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter Name"
												onChange={e => this.setState({ name: e.target.value })}
												value={this.state.name}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridlast_name">
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter Last Name"
												onChange={e => this.setState({ last_name: e.target.value })}
												value={this.state.last_name}
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridemail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												placeholder="Enter email"
												onChange={e => this.setState({ email: e.target.value })}
												value={this.state.email}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridpassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												placeholder="Password"
												onChange={e => this.setState({ password: e.target.value })}
												value={this.state.password}
											/>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridusername">
										<Form.Label>Username</Form.Label>
										<Form.Control
											placeholder="Username"
											type="text"
											onChange={e => this.setState({ username: e.target.value })}
											value={this.state.username}
										/>
									</Form.Group>

									<Form.Group controlId="formGridaddress">
										<Form.Label>Address </Form.Label>
										<Form.Control
											placeholder="Apartment, studio, or floor"
											type="text"
											onChange={e => this.setState({ address: e.target.value })}
											value={this.state.address}
										/>
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridcity">
											<Form.Label>City</Form.Label>
											<Form.Control
												type="text"
												placeholder="City"
												onChange={e => this.setState({ city: e.target.value })}
												value={this.state.city}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridstate">
											<Form.Label>State</Form.Label>
											<Form.Control
												type="text"
												placeholder="State"
												onChange={e => this.setState({ state: e.target.value })}
												value={this.state.state}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridzip_code">
											<Form.Label>Zip</Form.Label>
											<Form.Control
												type="text"
												onChange={e => this.setState({ zip_code: e.target.value })}
												value={this.state.zip_code}
											/>
										</Form.Group>
									</Form.Row>

									<Link to="/">
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
													this.state.username
												)
											}>
											Submit
										</Button>
									</Link>
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
