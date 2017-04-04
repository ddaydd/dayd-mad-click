if(typeof(Dayd) === 'undefined') Dayd = {};
if(typeof(Dayd.game) === 'undefined') Dayd.game = {};

class MadClick {

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

Dayd.game.MadClick = MadClick;
