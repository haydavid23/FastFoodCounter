import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext.js";

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
											300 sit-ups
											<Form.Check
												type="checkbox"
												className="d-inline"
												id="situps"
												onChange={e => actions.workouts(e.target.checked, 300)}
											/>
										</ListGroup.Item>
										<ListGroup.Item variant="dark">
											15 min run
											<Form.Check
												type="checkbox"
												className="d-inline"
												onChange={e => actions.workouts(e.target.checked, 600)}
											/>
										</ListGroup.Item>
										<ListGroup.Item variant="dark">
											500 push-ups{" "}
											<Form.Check
												type="checkbox"
												className="d-inline"
												onChange={e => actions.workouts(e.target.checked, 500)}
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
