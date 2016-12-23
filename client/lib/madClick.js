'use strict';
if(typeof(Dayd) == 'undefined') Dayd = {};

class madClick {

  constructor() {
    Meteor.subscribe('daydMadClick');
  }

  myScore() {
    var s = MadClick.findOne({"user._id": Meteor.userId()});
    return s && s.score ? s.score : 0;
  }

  myMultiplier() {
    var s = MadClick.findOne({"user._id": Meteor.userId()});
    return s && s.multiplier ? s.multiplier : 1;
  }

  btnClick() {
    Meteor.call('mCAddClick', this.myMultiplier());
  }

  getNextUpgrade() {
    var m = this.myMultiplier();
    return [
      {key: 'x2', label: 'x2', price: m * 100, value: 2}
    ]
  }

  upgrade(u) {
    if(this.myScore() > u.price) {
      var m = this.myMultiplier();
      Meteor.call('mCUpdateUser', m * u.value);
      Meteor.call('mCAddClick', -u.price);
    }
  }
}

Dayd.MadClick = madClick;
