import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Workouts } from "../component/workouts.js";
import { Context } from "../store/appContext.js";

export class Tablemain extends React.Component {
	constructor() {
		super();
		this.state = {
			initialValue: 1
		};
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
											return (
												<tr key={index}>
													<td scope="row" className="text-center">
														<img src={item.photo.thumb} id="pictures" className="pr-2" />
														{item.food_name}
													</td>
													<td scope="row">
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1">
																<Form.Control
																	name="qty"
																	as="select"
																	onChange={e =>
																		actions.qtySelected(e.target.value, index)
																	}>
																	<option value="1">1</option>
																</Form.Control>
															</Form.Group>
														</Form>
													</td>

													<td scope="row" className="text-center" id="cal">
														{item.nf_calories}
													</td>

													<td scope="row">
														<Workouts />
													</td>
													<td scope="row" className="text-center">
														{"Login to See Calories Burned"}
														<i
															id="x"
															className="fas fa-times fa-2x float-right"
															onClick={() => actions.delButton2(item, index)}
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
