import React from "react";
import { Tableuser } from "../component/tableuser.js";
import "../../styles/demo.scss";
import { Context } from "../store/appContext.js";
import { Typeahead, Menu, menuItemContainer, MenuItem } from "react-bootstrap-typeahead";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Usernav } from "../component/usernav.js";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Select } from "../component/dropdown";

export class Demo extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			select: ""
		};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<Usernav onDelete={() => this.setState({ showModal: true })} />
								<br />
								<br />
								<br />
								<br />
								<h1 className="text-center">
									<strong>Time to Burn Some Calories!</strong>
								</h1>
								<div />
								<div className="text-center">
									<span className="text-capitalize font-weight-bold h2 " id="username">
										Welcome, {store.tempLoggedUser.name}
									</span>{" "}
									<br />
									<i className="fas fa-caret-square-left arrow" onClick={() => actions.changeDay()}>
										{" "}
									</i>{" "}
									<span className="font-weight-bold">
										{" "}
										{store.months[store.day.getMonth()]} {store.day.getDate()},{" "}
										{store.day.getFullYear()}{" "}
									</span>
									<i className="fas fa-caret-square-right arrow " />
								</div>
								<br />
								<Select />
								<div className="container d-flex flex-row justify-content-center">
									<Typeahead
										ref={typeahead => (this.typeahead = typeahead)}
										className="w-25 d-inline-block search"
										labelKey="food"
										align="justify"
										placeholder="Choose your Meal"
										options={store.common.concat(store.branded)}
										renderMenu={(results, menuProps) => (
											<Menu {...menuProps}>
												{results.map((result, index) => (
													<MenuItem
														option={result}
														position={index}
														key={index}
														className="text-capitalize">
														{<img src={result.pic} />} {result.food}
													</MenuItem>
												))}
											</Menu>
										)}
										id="food"
										onChange={selected => {
											this.setState({ select: selected });
										}}
									/>
									<Button
										type="submit"
										className="d-inline-block"
										onClick={() =>
											actions.addFood(
												this.state.select,
												this.typeahead.getInstance().clear(),
												this.typeahead.getInstance().getInput().value
											)
										}>
										Add Food Item
									</Button>
								</div>
								<div id="ove">
									<Tableuser onDelete={() => this.setState({ showModal: true })} />
								</div>
								<br />
								<br />
								<br />
								<br />
								<ProgressBar id="bar">
									<ProgressBar
										className="mw-100"
										variant="danger"
										animated={true}
										now={store.totalCal}
										key={1}
										label={store.totalCal <= 0 ? "" : "Total Cal: " + store.totalCal}
									/>

									<ProgressBar
										className="mw-100"
										variant="success"
										animated={true}
										now={store.totalCalBurned}
										key={3}
										label={store.totalCalBurned ? "Total Cal Burned: " + store.totalCalBurned : ""}
									/>
								</ProgressBar>
								;
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
