var mc;

Template.daydMadClick.onRendered(function() {
  Meteor.subscribe('daydMadClick');
});
Template.daydMadClick.onRendered(function() {

  mc = new Dayd.MadClick;
});

Template.daydMadClick.helpers({

  myScore: function() {
    var mc = MadClick.findOne({"user._id": Meteor.userId()});
    return mc ? mc.score : '0';
  },

  scores: function() {
    return MadClick.find({});
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
  }

});
