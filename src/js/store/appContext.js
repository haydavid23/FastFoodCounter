import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("https://trackapi.nutritionix.com/v2/search/instant", {
				headers: {
					"x-app-key": "2865a994886d0e258357d55037e33f3b",
					"x-remote-user-id": "0",
					"x-app-id": "da0a3819"
				}
			})
				.then(response => response.json())

				.then(data => {
					let { store } = this.state;
					store.food = data;
					this.setState({ store });
				});
		}

		render() {
			console.log(this.state.store.food);
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
