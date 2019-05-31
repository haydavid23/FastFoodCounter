import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";
import { Modal } from "../component/modallogin";
import { Select } from "../component/dropdown";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Tablemain } from "../component/tablemain.js";
import { Mainnav } from "../component/mainnav.js";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Typeahead, Menu, menuItemContainer, MenuItem } from "react-bootstrap-typeahead";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			selectValue: null,
			selectType: "",
			apiData: ""
		};

		// this.handleChange = this.handleChange.bind(this);
	}

	// handleChange(event) {
	// 	this.setState({ selectValue: event.target.value });
	// 	fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + this.selectValue, {
	// 		headers: {
	// 			"x-app-key": "2865a994886d0e258357d55037e33f3b",
	// 			"x-remote-user-id": "0",
	// 			"x-app-id": "da0a3819"
	// 		}
	// 	})
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState({
	// 				apiData: data.common.map((item, index) => {
	// 					return item.food_name;
	// 				})
	// 			});
	// 		});
	// }

	render() {
		const TypeaheadMenuItem = menuItemContainer(MenuItem);
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						store.fetcho = this.state.selectValue;
						store.tableMain = this.state.selectType;

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

								<Select />

								<div className="container d-flex flex-row justify-content-center">
									<Typeahead
										className="w-25 d-inline-block search"
										id="food"
										labelKey="name"
										placeholder="Choose your Meal"
										options={store.info}
										onInputChange={() => {
											actions.searchBar();
										}}
										onChange={selected => {
											this.setState({ selectType: selected });
										}}
									/>
									<Button type="submit" className="d-inline-block ">
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
