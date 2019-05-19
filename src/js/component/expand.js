import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

export class Example extends React.Component {
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
					onClick={() => this.setState({ open: !open })}
					aria-controls="example-collapse-text"
					aria-expanded={open}>
					View Workout
				</Button>
				<Collapse in={this.state.open}>
					<div id="example-collapse-text">
						<ListGroup variant="flush">
							<ListGroup.Item variant="dark">Cras justo odio</ListGroup.Item>
							<ListGroup.Item variant="dark">Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item variant="dark">Morbi leo risus</ListGroup.Item>
							<ListGroup.Item variant="dark">Porta ac consectetur ac</ListGroup.Item>
						</ListGroup>
					</div>
				</Collapse>
			</>
		);
	}
}
