import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

export class Workouts extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false
		};
	}

	render() {
		const { open } = this.state;
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
							<ListGroup.Item variant="dark" className="text-center">
								Please Login To See Workouts{" "}
							</ListGroup.Item>
						</ListGroup>
					</div>
				</Collapse>
			</>
		);
	}
}
