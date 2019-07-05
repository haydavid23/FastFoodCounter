import React from "react";
import "../../styles/table.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Workouts } from "../component/workouts.js";
import { Context } from "../store/appContext.js";
import Table from "react-bootstrap/Table";

export class MainTableRes extends React.Component {
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
							<Table responsive bordered striped hover variant="dark" size="sm">
								<thead>
									<tr>
										<th className="text-center">Food Item</th>
										<th className="text-center">QTY</th>
										<th className="text-center">Calories</th>
										<th className="text-center">Workouts</th>
										<th className="text-center">Calories Burned</th>
									</tr>
								</thead>
								<tbody>
									{store.selectedFoods.map((item, index) => {
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
																size="sm"
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

												<td className="text-center">{item.nf_calories}</td>

												<td>
													<Workouts />
												</td>
												<td className="text-center">
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
							</Table>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

MainTableRes.propTypes = {
	onDelete: PropTypes.func
};
