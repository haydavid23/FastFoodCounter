import React from "react";

export class Table extends React.Component {
	render() {
		return (
			<div className="container">
				<table className="table table-bordered table-dark mt-auto">
					<thead>
						<tr>
							<th scope="col" className="text-center">
								Food Item
							</th>
							<th scope="col" className="text-center">
								Calories
							</th>
							<th scope="col" className="text-center">
								WorkOut
							</th>
							<th scope="col" className="text-center">
								Calories Burned
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" />
							<th scope="row" />
							<th scope="row" />
							<th scope="row" />
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
