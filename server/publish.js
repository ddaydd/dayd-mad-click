Meteor.publish("daydMadClick", function() {
  return MadClick.find({});
});
