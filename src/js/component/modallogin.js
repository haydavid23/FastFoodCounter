import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../styles/modallog.scss";
import { Route, Redirect } from "react-router";

export class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="modal"
							tabIndex="-1"
							role="dialog"
							style={{ display: this.props.show ? "inline-block" : "none" }}>
							<div className="modal-dialog" role="document">
								<div className="modal-content bg-secondary" id="log">
									<div className="modal-header">
										<h5 className="modal-title text-center">Please Enter Username and Password</h5>
										{this.props.onClose ? (
											<button
												onClick={() => this.props.onClose()}
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">X</span>
											</button>
										) : (
											""
										)}
									</div>
									<div className="modal-body">
										<div>
											<img
												className="d-block mx-auto pb-2"
												src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDNltA46MJJv7Ls4zALdCgrSKL-mELlzAokLFv8jsfBveueOg"
											/>
										</div>
										<Form>
											<Form.Group as={Row} controlId="formHorizontalEmail" id="email">
												<Form.Label column sm={2}>
													Email
												</Form.Label>
												<Col sm={10}>
													<Form.Control
														type="email"
														placeholder="Email"
														onChange={e => this.setState({ email: e.target.value })}
														value={this.state.email}
														id="email"
													/>
												</Col>
											</Form.Group>

											<Form.Group as={Row} controlId="formHorizontalPassword">
												<Form.Label column sm={2}>
													Password
												</Form.Label>
												<Col sm={10}>
													<Form.Control
														type="password"
														placeholder="Password"
														onChange={e => this.setState({ password: e.target.value })}
														value={this.state.password}
														id="password"
													/>
												</Col>
											</Form.Group>
											<div>
												<Link to="/demo">
													<button
														type="button"
														className="btn btn-primary w-100"
														onClick={() =>
															actions.jwtToken(this.state.email, this.state.password)
														}>
														Login
													</button>
												</Link>
											</div>
										</Form>
									</div>
									<div className="modal-footer">
										<div className="d-inline-block text-left">
											<Link to="/newuser" className="font-weight-bold text-white">
												Create an Account
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	match: PropTypes.object,
	onDelete: PropTypes.func
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
