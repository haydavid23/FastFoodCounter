import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbarmain } from "../component/navbarmain.js";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";
import { Modal } from "../component/modallogin";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Tablemain } from "../component/tablemain.js";
import { Newnav } from "../component/newnav.js";

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
								<Newnav onDelete={() => this.setState({ showModal: true })} />
								<Modal
									show={this.state.showModal}
									onClose={() => this.setState({ showModal: false })}
								/>
								<Carousel>
									<Carousel.Item>
										<img
											className="d-block w-90"
											src="http://fitbydesigncoppell.com/wp-content/uploads/2014/05/burpee_fries_post.jpg"
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3>Customized workouts to counter your fast food meals</h3>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-90"
											src="https://i.pinimg.com/originals/5d/77/ad/5d77adca05eb2ad971f559b2fafd2fea.jpg"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>All the major fast food chains include</h3>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-90"
											src="https://www.unilad.co.uk/wp-content/uploads/2016/03/Screen-Shot-2016-03-04-at-17.26.35.png"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Keep track of your fast food calorie intake</h3>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>

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
									<Tablemain />
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
