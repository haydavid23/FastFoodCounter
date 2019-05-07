import React from "react";
import { Table } from "../component/table.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center">Time to Burn Some Calories!</h1>
					<div className="m-auto text-center" id="search">
						<span>Search Bar</span>
					</div>

					<br />

					<div className="text-center">
						<i className="fas fa-caret-square-left"> </i>{" "}
						<span className="font-weight-bold"> May 6, 2019 </span>
						<i className="fas fa-caret-square-right" />
					</div>
					<br />

					<div>
						<Table />
					</div>

					<i className="fas fa-plus" id="plus">
						<span className="font-weight-bold">Add Another Food Item</span>
					</i>

					<div id="totalCal" className="text-white p-2 d-inline-block text-center">
						Total Calories
					</div>
					<div id="total2" className="text-white d-inline-block p-2">
						Total Calories Burned
					</div>
				</div>
			</div>
		);
	}
}
