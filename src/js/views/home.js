import React from "react";
import { Table } from "../component/table.js";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { ModalPlan } from "../component/modalplan";
import ProgressBar from "react-bootstrap/ProgressBar";

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
								<button type="button" className="btn btn-primary" id="totalCal">
									Total Calories
									<span className="badge badge-light">4</span>
								</button>
								<div id="total2" className="text-white d-inline-block p-2 text-center">
									Total Burned Calories
								</div>
								<ProgressBar id="bar">
									<ProgressBar
										className="mw-100"
										striped
										variant="danger"
										now={1000}
										key={1}
										label={"Total Calories Intake"}
									/>
									<ProgressBar
										striped
										variant="warning"
										now={700}
										key={2}
										label={"Left Over Calories"}
									/>
									<ProgressBar
										className="mw-100"
										variant="success"
										now={300}
										key={3}
										label={"Total Calories Burned"}
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
