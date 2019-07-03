import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";
import Form from "react-bootstrap/FormGroup";
import { StaticRouter } from "react-router";
import { withRouter } from "react-router-dom";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			totalCalBurned: "",
			tableIndex: "",
			workoutIndex: "",
			caloriesBurned: [],
			newUser: [],
			tempLoggedUser: null,
			tableContent: "",
			query: "",
			calories: "",
			totalCal: [],
			common: [],
			branded: [],
			selected: [],
			foodCatalog: [],
			selectedFoods: [],
			jwtToken: null,
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
			searchBar: () => {
				const store = getStore();
				if (store.tableContent == "") {
					return "Please Choose Meal";
				}
			},

			workouts: (checked, cal, index) => {
				const store = getStore();
				console.log(index);
				console.log(checked);

				if (checked == true) {
					setStore({
						workoutIndex: index,
						selectedFoods: store.selectedFoods.map((f, i) => {
							if (i == index) {
								let food = Object.assign({}, f);

								food.burned = cal + food.burned;

								return food;
							}
							return f;
						})
					});

					setStore({
						caloriesBurned: store.selectedFoods.map((f, i) => {
							return f.burned;
						}),

						totalCalBurned: store.caloriesBurned.reduce(
							(accumulator, currentValue) => accumulator + currentValue,
							cal
						)
					});
				}
				if (checked == false) {
					setStore({
						selectedFoods: store.selectedFoods.map((f, i) => {
							if (i == index) {
								let food = Object.assign({}, f);

								food.burned = food.burned - cal;

								return food;
							}
							return f;
						})
					});

					setStore({
						caloriesBurned: store.selectedFoods.map((f, i) => {
							return f.burned;
						}),
						totalCalBurned: store.totalCalBurned - cal
					});
				}
				console.log(store.selectedFoods);
			},

			newUser: (name, last_name, email, password, address, city, state, zip_code, username) => {
				const store = getStore();
				fetch("https://3000-cef81864-8402-4f4c-9e19-e04d37a9d2c0.ws-us0.gitpod.io/person", {
					method: "POST",

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

			jwtToken: (username, password, route) => {
				const store = getStore();
				let loggedUser = store.newUser.find(item => {
					return item.username == username;
				});
				console.log(loggedUser);
				fetch("https://3000-cef81864-8402-4f4c-9e19-e04d37a9d2c0.ws-us0.gitpod.io/login", {
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
						console.log(res);
						setStore({
							jwtToken: res,
							tempLoggedUser: loggedUser
						});

						if (store.jwtToken.msg !== "Bad username or password") {
							route.push("/demo");
							console.log(store.jwtToken.msg);
						} else if (store.jwtToken.msg == "Bad username or password") {
							alert("Bad username or password");
							console.log(store.jwtToken.msg);
						} else if (store.jwtToken.msg == "Missing username parameter") {
							alert("Please Enter the Username");
							console.log(store.jwtToken.msg);
						}
					});
			},

			qtySelected: (qty, index) => {
				const store = getStore();
				console.log("Store: ", store);
				let newqty = qty;

				setStore({
					selectedFoods: store.selectedFoods.map((f, i) => {
						if (i === index) {
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
							return {
								food: item.food_name,
								pic: item.photo.thumb
							};
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
							return {
								food: item.food_name,
								pic: item.photo.thumb
							};
						});
						setStore({ branded: branded });
					});
			},

			addFood: (selected, clear, value) => {
				const store = getStore();
				console.log(value);

				if (value == "") {
					alert("Please Select a Meal");
				} else {
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
							let selectedFoods = store.selectedFoods.concat(res.foods);
							setStore({
								foodCatalog: foodCatalog,
								selectedFoods: selectedFoods.map((f, i) => {
									let food = Object.assign({}, f);
									if (!food.burned) {
										food.burned = 0;
										return food;
									}

									return f;
								})
							});

							setStore({
								totalCal: store.selectedFoods.reduce((a, { nf_calories }) => a + nf_calories, 0)
							});
						});
					document.querySelector("#drop").value = "----";

					clear;

					setStore({
						common: [],
						branded: []
					});
				}
			},

			delButton: (item, index) => {
				const store = getStore();
				// store.selectedFoods.splice(index, 1);
				// store.foodCatalog.splice(index, 1);
				// store.caloriesBurned.splice(index, 1);

				let newTotal = store.totalCal - item.nf_calories;

				setStore({
					store: store,
					totalCal: newTotal,
					caloriesBurned: store.caloriesBurned.filter((vai, i) => i !== index),
					totalCalBurned: store.caloriesBurned.reduce(
						(accumulator, currentValue) => store.totalCalBurned - store.caloriesBurned[index],
						0
					),
					selectedFoods: store.selectedFoods.filter((vai, i) => i !== index),
					foodCatalog: store.foodCatalog.filter((vai, i) => i !== index)
				});
			},

			delButton2: (item, index) => {
				const store = getStore();
				store.selectedFoods.splice(index, 1);
				store.foodCatalog.splice(index, 1);

				setStore({
					store: store,
					totalCal: store.totalCal - item.nf_calories
				});
			}
		}
	};
};

export default getState;
