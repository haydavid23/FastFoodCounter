import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export class ModalPlan extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="modal"
							tabIndex="-1"
							role="dialog"
							style={{ display: this.props.show ? "inline-block" : "none" }}>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Workout</h5>
										{this.props.onClose ? (
											<button
												onClick={() => this.props.onClose()}
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">X</span>
											</button>
										) : (
											""
										)}
									</div>
									<div className="modal-body">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="defaultCheck1"
											/>
											<label className="form-check-label">Default checkbox</label>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => this.props.onClose()}>
											NOT YET!
										</button>
										<button type="button" className="btn btn-success" data-dismiss="modal">
											DONE!
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

ModalPlan.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	match: PropTypes.object,
	onDelete: PropTypes.func
};

ModalPlan.defaultProps = {
	show: false,
	onClose: null
};
