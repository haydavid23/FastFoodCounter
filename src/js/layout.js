import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import New from "./views/newuser";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import "../styles/home.scss";
import Modal from "./component/modallogin";
//create your first component
export class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
	}

	render() {
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100" id="back">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/newuser" component={New} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
