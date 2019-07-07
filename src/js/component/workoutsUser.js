import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class WorkoutsUser extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false
		};
	}

	render() {
		const { open } = this.state;
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<>
							<Button
								className="w-100"
								onClick={() => this.setState({ open: !open })}
								aria-controls="example-collapse-text"
								aria-expanded={open}>
								Workout
							</Button>
							<Collapse in={this.state.open}>
								<div id="example-collapse-text">
									<ListGroup variant="flush">
										<ListGroup.Item variant="dark">
											<a
												href={"https://media.giphy.com/media/35EH7kLQiMM1YWYmUI/giphy.gif"}
												target="_blank"
												rel="noopener noreferrer">
												300 sit-ups
											</a>
											<Form.Check
												type="checkbox"
												className="d-inline"
												id="situps"
												onChange={e =>
													actions.workouts(e.target.checked, 300, this.props.index)
												}
											/>
										</ListGroup.Item>
										<ListGroup.Item variant="dark">
											<a
												href={"https://media.giphy.com/media/23hPPMRgPxbNBlPQe3/giphy.gif"}
												target="_blank"
												rel="noopener noreferrer">
												100 Burpees
											</a>
											<Form.Check
												type="checkbox"
												className="d-inline"
												onChange={e =>
													actions.workouts(e.target.checked, 600, this.props.index)
												}
											/>
										</ListGroup.Item>
										<ListGroup.Item variant="dark">
											<a
												href={"https://media.giphy.com/media/tsTsgT7v6wy5hYXI9U/giphy.gif"}
												target="_blank"
												rel="noopener noreferrer">
												500 push-ups{" "}
											</a>
											<Form.Check
												type="checkbox"
												className="d-inline"
												onChange={e =>
													actions.workouts(e.target.checked, 500, this.props.index)
												}
											/>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</Collapse>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}
WorkoutsUser.propTypes = {
	index: PropTypes.number
};
