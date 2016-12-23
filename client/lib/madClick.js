'use strict';
if(typeof(Dayd) == 'undefined') Dayd = {};

class madClick {

  constructor() {
    this.scores = [];
    this.score = 0;
    this.react = new ReactiveDict();
    this.react.set('multiplier', 1);
    var scores = MadClick.find({}, {sort: {score: 1}}).fetch();
  }

  btnClick() {
    Meteor.call('addClick', this.react.get('multiplier'));
  }

  getNextUpgrade() {
    return [
      {key: 'x2', label: 'x2', price: 100, value: 2}
    ]
  }

  upgrade(u) {
    if(this.score > u.price) {
      var m = this.react.get('multiplier');
      this.react.set('multiplier', m * u.value);
      Meteor.call('addClick', -u.price);
    }
  }
}

Dayd.MadClick = madClick;
