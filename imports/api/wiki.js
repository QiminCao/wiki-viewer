import { Meteor } from "meteor/meteor";
import wikipedia from "node-wikipedia";
import { check } from "meteor/check";

// wiki api 
if (Meteor.isServer) {
	Meteor.methods({
		"getData"(param) {
			check(param, String);

			return new Promise((resolve, reject) => {
				wikipedia.page.data(param, { content: true }, resolve);
			});
		}
	});
}
