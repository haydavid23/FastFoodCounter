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
import Table from "react-bootstrap/Table";

export class Tableuser extends React.Component {
	constructor() {
		super();
		this.state = {
			index: ""
		};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container d-inline">
								<Table responsive bordered striped hover variant="dark" size="sm">
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
											store.index2 = index;
											console.log(store.index2);
											return (
												<tr key={index}>
													<td className="text-center text-capitalize">
														<img src={item.photo.thumb} id="pictures" className="pr-2" />
														{item.food_name}
													</td>
													<td>
														<Form>
															<Form.Group controlId="exampleForm.ControlSelect1">
																<Form.Control
																	className="text-dark bg-white"
																	plaintext="true"
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

													<td className="text-center" id="cal">
														{Math.round(item.nf_calories)}
													</td>

													<td scope="row">
														<WorkoutsUser index={index} />
													</td>
													<td className="text-center">
														{item.burned}
														<i
															id="x"
															className="fas fa-times fa-2x float-right"
															onClick={() => actions.delButton(item, index)}
														/>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
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
