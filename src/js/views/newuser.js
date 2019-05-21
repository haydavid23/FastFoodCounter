import React from "react";
import { Tableuser } from "../component/tableuser.js";
import "../../styles/demo.scss";
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
			showModal: false
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
								<Form className="bg-dark text-white w-50 mx-auto p-4">
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" placeholder="Password" />
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridAddress1">
										<Form.Label>Address</Form.Label>
										<Form.Control placeholder="1234 Main St" />
									</Form.Group>

									<Form.Group controlId="formGridAddress2">
										<Form.Label>Address 2</Form.Label>
										<Form.Control placeholder="Apartment, studio, or floor" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCity">
											<Form.Label>City</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>State</Form.Label>
											<Form.Control as="select">
												<option>Choose...</option>
												<option>...</option>
											</Form.Control>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridZip">
											<Form.Label>Zip</Form.Label>
											<Form.Control />
										</Form.Group>
									</Form.Row>

									<Link to="/">
										<Button variant="primary" type="submit">
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
