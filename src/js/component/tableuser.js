import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { WorkoutsUser } from "../component/workoutsUser.js";
import { Context } from "../store/appContext.js";

export class Tableuser extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

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
										{store.selectedFoods.map((item, index) => {
											console.log(item);
											return (
												<tr key={index}>
													<td scope="row" className="text-center">
														{item.food_name}
													</td>
													<td scope="row">
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1">
																<Form.Control
																	name="qty"
																	as="select"
																	onChange={e => {
																		actions.qtySelected(e.target.value, index);
																	}}>
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																</Form.Control>
															</Form.Group>
														</Form>
													</td>

													<td scope="row" className="text-center" id="cal">
														{item.serving_qty * item.nf_calories}
													</td>

													<td scope="row">
														<WorkoutsUser index={index} />
													</td>
													<td scope="row" className="text-center">
														{store.caloriesBurned}
														<i
															id="x"
															className="fas fa-times fa-2x float-right"
															onClick={() => actions.delButton(index, item)}
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

Tableuser.propTypes = {
	onDelete: PropTypes.func
};
