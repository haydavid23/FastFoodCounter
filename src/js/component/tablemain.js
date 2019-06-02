import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Workouts } from "../component/workouts.js";
import { Context } from "../store/appContext.js";

export class Tablemain extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container d-inline">
								<table className="table table-bordered table-dark mt-auto w-100" id="table">
									<thead>
										<tr>
											<th scope="col" className="text-center">
												Food Item
											</th>

											<th scope="col" className="text-center">
												QTY
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
										{store.foods.map((item, index) => {
											console.log(item);
											return (
												<tr key={index}>
													<td scope="row" className="text-center">
														{item[0].food_name}
													</td>
													<td scope="row" />

													<td scope="row" className="text-center">
														{item[0].nf_calories}
													</td>
													<td scope="row">
														<Workouts />
													</td>
													<td scope="row" className="text-center">
														{"500"}
														<i id="x" className="fas fa-times fa-2x float-right" />
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Tablemain.propTypes = {
	onDelete: PropTypes.func
};
