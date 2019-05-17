import React from "react";
import { Table } from "../component/table.js";
import "../../styles/login.scss";
import { Context } from "../store/appContext.js";
import { ModalPlan } from "../component/modalplan";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

export class Demo extends React.Component {
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
								<div id="ove">
									<Table onDelete={() => this.setState({ showModal: true })} />
									<Table onDelete={() => this.setState({ showModal: true })} />
									<ModalPlan
										show={this.state.showModal}
										onClose={() => this.setState({ showModal: false })}
									/>
								</div>
								<i className="fas fa-plus" id="plus">
									<span className="font-weight-bold">Add Another Food Ite</span>
								</i>
								<br />
								<br />
								<br />
								<br />
								<ProgressBar id="bar">
									<ProgressBar
										className="mw-100"
										variant="danger"
										now={1000}
										key={1}
										label={"Total Calories Intake"}
									/>
									<ProgressBar variant="warning" now={700} key={2} label={"Left Over Calories"} />
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
