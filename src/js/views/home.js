import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";
import { Modal } from "../component/modallogin";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Tablemain } from "../component/tablemain.js";
import { Mainnav } from "../component/mainnav.js";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Typeahead } from "react-bootstrap-typeahead";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			selectValue: null
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ selectValue: event.target.value });
	}

	render() {
		console.log(this.state.selectValue);
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						store.fetcho = this.state.selectValue;
						console.log(store.fetcho);
						return (
							<div className="container">
								<Mainnav onDelete={() => this.setState({ showModal: true })} />
								<br />
								<br />
								<br />
								<br />
								<Modal
									show={this.state.showModal}
									onClose={() => this.setState({ showModal: false })}
								/>

								<h1> FAST FOOD COUNTER </h1>
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
								<br />
								<br />
								<Form>
									<Form.Group controlId="exampleForm.ControlSelect1" className="mx-auto" id="drop">
										<Form.Label>Example select</Form.Label>
										<Form.Control as="select" className="w-25" onChange={this.handleChange}>
											<option value="McDonalds">McDonalds</option>
											<option value="Burger King">Burger King</option>
											<option value="Taco Bell">Taco Bell</option>
											<option value="KFC">KFC</option>
											<option value="Wendys">Wendys</option>
										</Form.Control>
									</Form.Group>
								</Form>

								<div className="container d-inline">
									<Typeahead
										id="food"
										labelKey="name"
										placeholder="Choose your Meal"
										options={["dd"]}
										className="w-50 mx-auto bar"
										onInputChange={input => {
											console.log(input);
										}}
										onChange={selected => {
											store.info.push(selected[0]);
											console.log(store.info);
										}}
									/>

									<Button type="submit" className="d-inline-block float-right">
										Add Food Item
									</Button>
								</div>
								<div className="container">
									<Tablemain />
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
