import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";
import Modal from "../component/modallogin";
import { Select } from "../component/dropdown";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Tablemain } from "../component/tablemain.js";
import { MainTableRes } from "../component/maintableres.js";
import { Mainnav } from "../component/mainnav.js";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Typeahead, Menu, menuItemContainer, MenuItem } from "react-bootstrap-typeahead";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { LoggedMainNav } from "../component/loggedMainNav.js";

export class Home extends React.Component {
	constructor(props) {
		super(props);
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
								{!store.tempLoggedUser ? (
									<Mainnav onDelete={() => this.setState({ showModal: true })} />
								) : (
									<LoggedMainNav onDelete={() => this.setState({ showModal: true })} />
								)}
								<br />
								<br />
								<br />
								<br />
								<Modal
									show={this.state.showModal}
									onClose={() => this.setState({ showModal: false })}
								/>

								<h1> FAST FOOD COUNTER </h1>
								<div id="ol" className="mb-3">
									<ol style={{ listStyleType: "none" }} className="text-center text-bold" id="sub">
										<li>Get Customized Workouts for your Fast Food Meals </li>
										<li>Keep Track of your Fast Food Calorie Intake </li>
										<li>All the Major Fast Food Chains Available!!!</li>
									</ol>
								</div>

								<Carousel>
									<Carousel.Item>
										<img
											className="d-block w-75 mx-auto"
											src="http://fitbydesigncoppell.com/wp-content/uploads/2014/05/burpee_fries_post.jpg"
											alt="First slide"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block  w-75 mx-auto border border-dark"
											src="https://i.pinimg.com/originals/5d/77/ad/5d77adca05eb2ad971f559b2fafd2fea.jpg"
											alt="Third slide"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block  w-75 mx-auto"
											src="https://www.unilad.co.uk/wp-content/uploads/2016/03/Screen-Shot-2016-03-04-at-17.26.35.png"
											alt="Third slide"
										/>
									</Carousel.Item>
								</Carousel>
								<div className="jumbotron bg-danger p-3">
									<h1 className="display-4 bg-danger text-white text-center text-weight-bold">
										TRY IT NOW!
									</h1>
								</div>
								<br />
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
								<div className="container">
									<MainTableRes />
								</div>
								<div className="jumbotron bg-danger p-3" id="jumbo2">
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
