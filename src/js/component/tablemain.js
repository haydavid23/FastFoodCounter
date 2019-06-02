import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
													<td scope="row">
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1">
																<Form.Control as="select" id="qty">
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																</Form.Control>
															</Form.Group>
														</Form>
													</td>

													<td scope="row" className="text-center" id="cal">
														{item[0].nf_calories}
													</td>
													<td scope="row">
														<Workouts />
													</td>
													<td scope="row" className="text-center">
														{"500"}
														<i
															id="x"
															className="fas fa-times fa-2x float-right"
															onClick={() => actions.delButton(index)}
														/>
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
