var mc;

Template.daydMadClick.onCreated(function() {
  Meteor.subscribe('daydMadClick');
  mc = new Dayd.MadClick;
});
Template.daydMadClick.onRendered(function() {

});

Template.daydMadClick.helpers({

  myScore: function() {
    var s = MadClick.findOne({"user._id": Meteor.userId()});
    mc.score = s ? s.score : 0;
    return mc.score;
  },

  scores: function() {
    return MadClick.find({}, {sort: {score: -1}});
  },

  multiplier: function() {
    return mc.react.get('multiplier');
  },

  nextUpgrade: function() {
    return mc.getNextUpgrade();
  },

  username: function() {
    var u = Meteor.users.findOne(this.user._id);
    if(!u) return 'inconnu';
    if(u.username)
      return u.username;
    else if(u.profile && u.profile.name)
      return u.profile.name;
    else return 'inconnu';
  }

});

Template.daydMadClick.events({

  'click .js-click': function() {
    mc.btnClick();
  },

  'click .js-upgrade': function() {
    mc.upgrade(this);
  }

});
