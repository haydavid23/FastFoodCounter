import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";
import Form from "react-bootstrap/FormGroup";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			tableContent: "",
			query: "",
			calories: "",
			common: [],
			branded: [],
			selected: [],
			foods: [],

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
			qtySelected: (qty, index) => {
				const store = getStore();
				let newqty = store.foods[index].serving_qty * qty;
				store.foods[index].serving_qty = setStore({ store: newqty });
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
						let foods = store.foods.concat(res.foods);
						setStore({ foods: foods });
					});
				document.querySelector("#drop").value = "----";

				clear;
			},

			delButton: id => {
				const store = getStore();
				store.foods.splice(id, 1);
				setStore({ store: store });
			}
		}
	};
};

export default getState;
