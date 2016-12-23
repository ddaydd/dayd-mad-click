/**
 * Created by dayd on 22 12 2016
 */

Meteor.methods({

  mCAddClick: function(pt) {
    var u = Meteor.user();
    MadClick.update({"user._id": u._id}, {$set: {"user._id": u._id}, $inc: {score: +pt}}, {upsert: true});
  },

  mCUpdateUser: function(m) {
    var u = Meteor.user();
    MadClick.update({"user._id": u._id}, {$set: {"user._id": u._id, multiplier: m}}, {upsert: true});
  }

});
