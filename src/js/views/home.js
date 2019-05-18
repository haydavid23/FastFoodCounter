import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbarmain } from "../component/navbarmain.js";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";
import { ModalPlan } from "../component/modalplan";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<Navbarmain onDelete={() => this.setState({ showModal: true })} />
								<div className="card-group">
									<div className="card">
										<img
											src="https://www.freetrainers.com/image/kJkyN6UGohmSJirg7JjLdmoWpplW5mvkZjBGYaN_YvQ-ftd-lxiRpZkqR1uqd1ku.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Customized workout plan</h5>
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This content is a little bit longer.
											</p>
											<p className="card-text">
												<small className="text-muted">Last updated 3 mins ago</small>
											</p>
										</div>
									</div>
									<div className="card">
										<img
											src="https://media.gettyimages.com/photos/mcdonalds-picture-id157728622?s=612x612"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">
												The major fast food chains and their calories
											</h5>
											<p className="card-text">
												This card has supporting text below as a natural lead-in to additional
												content.
											</p>
											<p className="card-text">
												<small className="text-muted">Last updated 3 mins ago</small>
											</p>
										</div>
									</div>
									<div className="card">
										<img
											src="https://i2-prod.mirror.co.uk/incoming/article11853635.ece/ALTERNATES/s615/MAIN-calorie.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">How to counter your fast food calories</h5>
											<p className="card-text">
												This is a wider card with supporting text below as a natural lead-in to
												additional content. This card has even longer content than the first to
												show that equal height action.
											</p>
											<p className="card-text">
												<small className="text-muted">Last updated 3 mins ago</small>
											</p>
										</div>
									</div>
								</div>

								<div className="jumbotron bg-danger p-3">
									<h1 className="display-4 bg-danger text-white text-center text-weight-bold">
										TRY IT NOW!
									</h1>
								</div>
								<div className="search">
									<div className="container">
										<button type="button" id="button2" className="btn btn-dark btn-lg btn-block">
											Search Food Database
										</button>
									</div>
								</div>
								<div className="container">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th scope="col">Food Item</th>
												<th scope="col">Calories</th>
												<th scope="col">Counter</th>
												<th scope="col">Calories Burned</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">Big Mac</th>
												<td>500</td>
												<td>200 sit ups/4 minutes</td>
												<td>300</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="jumbotron bg-danger p-3">
									<p className="display-8 text-white text-center">
										Sign up today and get a personalized profile with alternative meals and
										workouts!
									</p>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Navbarmain.propTypes = {
	onDelete: PropTypes.func
};
