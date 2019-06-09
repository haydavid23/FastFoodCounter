import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export class Select extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Form className="text-center">
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label id="sub">Pick a Fast Food Chain</Form.Label>{" "}
									<Form.Control
										as="select"
										id="drop"
										className=" mx-auto w-25 search"
										onChange={() => actions.selection(document.querySelector("#drop").value)}>
										<option id="dv" className="text-center">
											----
										</option>
										<option value="McDonalds">McDonalds</option>
										<option value="Burger King">Burger King</option>
										<option value="Taco Bell">Taco Bell</option>
										<option value="KFC">KFC</option>
										<option value="Wendys">Wendys</option>
									</Form.Control>
								</Form.Group>
							</Form>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
