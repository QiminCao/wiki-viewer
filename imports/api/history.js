import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const searchedHistroy = new Mongo.Collection("searchedHistroy");

if (Meteor.isServer) {
	Meteor.publish("searchedHistroy", function() {
		return searchedHistroy.find({ userId: this.userId });
	});
}

Meteor.methods({
	"searchedHistroy.insert"(searchedItem) {
		check(searchedItem, String);

		if (!Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		allSearchedWords.insert({
			userId: this.userId,
			searchedItem: searchedItem
		});
	}
});


