import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";
import Form from "react-bootstrap/FormGroup";
import { StaticRouter } from "react-router";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			caloriesBurned: 0,
			newUser: [],
			tableContent: "",
			query: "",
			calories: "",
			totalCal: [],
			common: [],
			branded: [],
			selected: [],
			foodCatalog: [],
			selectedFoods: [],
			jwtToken: [],
			day: new Date(),
			previousDay: "",
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},

		actions: {
			workouts: (checked, cal, index) => {
				const store = getStore();

				if (checked == true) {
					setStore({ caloriesBurned: cal + store.caloriesBurned });
				} else if (checked == false) {
					setStore({ caloriesBurned: store.caloriesBurned - cal });
				}
			},

			newUser: (name, last_name, email, password, address, city, state, zip_code, username) => {
				const store = getStore();
				fetch("https://3000-a5cd9062-b8cd-4461-9054-26b4117dc4d6.ws-us0.gitpod.io/person", {
					method: "POST",
					mode: "no-cors",

					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						name: name,
						last_name: last_name,
						email: email,
						password: password,
						address: address,
						city: city,
						state: state,
						zip_code: zip_code,
						username: username
					})
				});
				setStore({ store });
			},

			jwtToken: (username, password) => {
				fetch("https://3000-a5cd9062-b8cd-4461-9054-26b4117dc4d6.ws-us0.gitpod.io/login", {
					method: "POST",

					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => response.json())

					.then(res => {
						setStore({
							jwtToken: res
						});
					});
			},

			qtySelected: (qty, index) => {
				const store = getStore();
				console.log("Store: ", store);
				let newqty = store.foodCatalog[index].serving_qty * qty;

				setStore({
					selectedFoods: store.selectedFoods.map((f, i) => {
						if (i == index) {
							let food = Object.assign({}, f);

							food.nf_calories = newqty * store.foodCatalog[index].nf_calories;
							return food;
						}
						return f;
					})
				});

				setStore({
					totalCal: store.selectedFoods.reduce((a, { nf_calories }) => a + nf_calories, 0)
				});
			},

			selection: select => {
				const store = getStore();
				let query = select;
				setStore({ query: query });
				console.log(store.query);
				fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + store.query, {
					headers: {
						"x-app-key": "2865a994886d0e258357d55037e33f3b",
						"x-remote-user-id": "0",
						"x-app-id": "da0a3819"
					}
				})
					.then(response => response.json())
					.then(data => {
						let common = data.common.map((item, index) => {
							return item.food_name;
						});

						setStore({ common: common });
					});

				fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + store.query, {
					headers: {
						"x-app-key": "2865a994886d0e258357d55037e33f3b",
						"x-remote-user-id": "0",
						"x-app-id": "da0a3819"
					}
				})
					.then(response => response.json())
					.then(data => {
						let branded = data.branded.map((item, index) => {
							return item.food_name;
						});
						setStore({ branded: branded });
					});
			},

			addFood: (selected, clear) => {
				const store = getStore();

				let tablecontent = selected;
				setStore({ tableContent: tablecontent });

				fetch(" https://trackapi.nutritionix.com/v2/natural/nutrients", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-app-key": "2865a994886d0e258357d55037e33f3b",
						"x-remote-user-id": "0",
						"x-app-id": "da0a3819"
					},
					body: JSON.stringify({
						query: store.tableContent,
						timezone: "US/Eastern"
					})
				})
					.then(response => response.json())

					.then(res => {
						let foodCatalog = store.foodCatalog.concat(res.foods);
						setStore({
							foodCatalog: foodCatalog,
							selectedFoods: store.selectedFoods.concat(res.foods)
						});

						setStore({
							totalCal: store.selectedFoods.reduce((a, { nf_calories }) => a + nf_calories, 0)
						});
					});
				document.querySelector("#drop").value = "----";

				clear;
			},

			delButton: (index, item) => {
				const store = getStore();
				store.selectedFoods.splice(index, 1);
				store.foodCatalog.splice(index, 1);
				let newTotal = store.totalCal - item.nf_calories;

				setStore({
					store: store,
					totalCal: newTotal,
					caloriesBurned: 0
				});
			},

			delButton2: (index, item) => {
				const store = getStore();
				store.selectedFoods.splice(index, 1);
				store.foodCatalog.splice(index, 1);

				setStore({
					store: store
				});
			}
		}
	};
};

export default getState;
