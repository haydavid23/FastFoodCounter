import React from "react";
import { Table } from "../component/table.js";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { ModalPlan } from "../component/modalplan";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<h1 className="text-center">
									<strong>Time to Burn Some Calories!</strong>
								</h1>
								<div className="m-auto text-center" id="search">
									<span>Search Bar</span>
								</div>

								<br />

								<div className="text-center">
									<i className="fas fa-caret-square-left" onClick={() => actions.changeDay()}>
										{" "}
									</i>{" "}
									<span className="font-weight-bold">
										{" "}
										{store.months[store.day.getMonth()]} {store.day.getDate()},{" "}
										{store.day.getFullYear()}{" "}
									</span>
									<i className="fas fa-caret-square-right" />
								</div>
								<br />

								<div>
									<Table onDelete={() => this.setState({ showModal: true })} />
									<ModalPlan
										show={this.state.showModal}
										onClose={() => this.setState({ showModal: false })}
									/>
								</div>

								<i className="fas fa-plus" id="plus">
									<span className="font-weight-bold">Add Another Food Item</span>
								</i>

								<div id="totalCal" className="text-white p-2 d-inline-block text-center">
									Total Calories
								</div>
								<div id="total2" className="text-white d-inline-block p-2 text-center">
									Total Burned Calories
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
