import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Container, Input, Form } from "semantic-ui-react";
import SearchBar from "./SearchBar.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			err: "",
			links: []
		};
	}

	onSearchSubmit(word) {
		// call meteor method to get data from api
		Meteor.call("getData", word, (err, res) => {
			if (err) {
				this.setState({
					error: err
				});
				return;
			}

			console.log(res);
			this.setState({
				links: res.links
			});
		});
	}

	renderHistory() {
		
	}

	renderLinks() {
		return this.state.links.map((link, index) => (
			<div key={index}>{link}</div>
		));
	}

	render() {
		return (
			<Container>
				<h1>Welcome to wiki viewer</h1>

				<SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
			</Container>
		);
	}
}

export default withTracker(() => {
	const handle = Meteor.subscribe("searchedHistroy");

	return {
		history: searchedHistroy
			.find({
				userId: Meteor.userId()
			})
			.fetch(),
		ready: handle.ready()
	};
})(App);
