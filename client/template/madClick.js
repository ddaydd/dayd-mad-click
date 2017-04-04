let mc;

Template.daydMadClick.onCreated(function() {
  mc = new Dayd.game.MadClick;
});
Template.daydMadClick.onRendered(function() {
});

Template.daydMadClick.helpers({

  scores: function() {
    return MadClick.find({}, {sort: {score: -1}});
  },

  myScore: function() {
    return mc.myScore();
  },

  myMultiplier: function() {
    return mc.myMultiplier();
  },

  nextUpgrade: function() {
    return mc.getNextUpgrade();
  },

  upgradeEnabled: function() {
    return mc.myScore() > this.price ? '' : 'disabled';
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
