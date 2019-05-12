import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Table extends React.Component {
	render() {
		return (
			<div className="container">
				<table className="table table-bordered table-dark mt-auto" id="table">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								Food Item
							</th>
							<th scope="col" className="text-center">
								Calories
							</th>
							<th scope="col" className="text-center">
								Workout
							</th>
							<th scope="col" className="text-center">
								Calories Burned
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row" />
							<th scope="row"> 400 </th>
							<th scope="row">
								<Button variant="link" onClick={() => this.props.onDelete()}>
									View Workout
								</Button>
							</th>
							<th scope="row" />
						</tr>{" "}
					</tbody>
				</table>
				<div>
					<i className="far fa-minus-square fa-3x float-right" />
				</div>
			</div>
		);
	}
}

Table.propTypes = {
	onDelete: PropTypes.func
};
