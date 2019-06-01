import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			tableMain: "",
			query: "",
			common: [],
			branded: [],
			info: ["sfsdd", "dddd"],
			selected: [],
			calories: [],

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
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			searchBar: () => {
				// const store = getStore();
				// fetch("https://trackapi.nutritionix.com/v2/search/instant?query=" + store.fetcho, {
				// 	headers: {
				// 		"x-app-key": "2865a994886d0e258357d55037e33f3b",
				// 		"x-remote-user-id": "0",
				// 		"x-app-id": "da0a3819"
				// 	}
				// })
				// 	.then(response => response.json())
				// 	.then(data => {
				// 		store.food = data.common.map((item, index) => {
				// 			return item.food_name;
				// 		});
				// 		setStore({ store: store });
				// 	});
			},

			selection: select => {
				const store = getStore();
				store.query = select;
				setStore({ store: store });
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
						store.common = data.common.map((item, index) => {
							return item.food_name;
						});
						setStore({ store: store });
						console.log(store.food);
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
						store.branded = data.branded.map((item, index) => {
							return item.food_name;
						});
						setStore({ store: store });
					});
			},

			addFood: selected => {
				const store = getStore();
				console.log(selected);
				console.log(store.calories);
				store.tableMain = selected;
				setStore({ store: store });

				fetch(" https://trackapi.nutritionix.com/v2/natural/nutrients", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-app-key": "2865a994886d0e258357d55037e33f3b",
						"x-remote-user-id": "0",
						"x-app-id": "da0a3819"
					},
					body: JSON.stringify({
						query: store.tableMain,
						timezone: "US/Eastern"
					})
				})
					.then(response => response.json())

					.then(res => {
						store.calories = res.foods.map((item, index) => {
							return item.nf_calories;
						});
						setStore({ store: store });
					});
			}
		}
	};
};

export default getState;
