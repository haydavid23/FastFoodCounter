import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Tablemain extends React.Component {
	render() {
		return (
			<div className="container d-inline">
				<table className="table table-bordered table-dark mt-auto w-100" id="table">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								Food Item
							</th>
							<th scope="col" className="text-center ">
								Calories
							</th>
							<th scope="col" className="text-center w-25">
								Workout
							</th>
							<th scope="col" className="text-center w-25">
								Calories burned
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row" />
							<th scope="row" className="text-center">
								{" "}
								400{" "}
							</th>
							<th scope="row">
								<Button variant="link" onClick={() => this.props.onDelete()}>
									View Workout
								</Button>
							</th>
							<th scope="row" />
						</tr>{" "}
					</tbody>
				</table>
			</div>
		);
	}
}

Tablemain.propTypes = {
	onDelete: PropTypes.func
};
