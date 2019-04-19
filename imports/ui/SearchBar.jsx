import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Grid } from "semantic-ui-react";

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(this.state.search);
	}

	render() {
		return (
			<Form onSubmit={this.onFormSubmit.bind(this)}>
				<Form.Field>
					<Input
						id="searchBar"
						type="text"
						value={this.state.search}
						onChange={e =>
							this.setState({ search: e.target.value })
						}
						placeholder="Search Wikiedia"
						aria-label="search"
						fluid
					/>
				</Form.Field>
			</Form>
		);
	}
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
