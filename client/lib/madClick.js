'use strict';
if(typeof(Dayd) == 'undefined') Dayd = {};

class madClick {

  constructor() {
    this.scores = [];
    this.score = 0;
    this.react = new ReactiveDict();
    this.react.set('multiplier', 1);
  }

  btnClick() {
    Meteor.call('addClick', this.react.get('multiplier'));
  }

  getNextUpgrade() {
    var m = this.react.get('multiplier');
    return [
      {key: 'x2', label: 'x2', price: m * 100, value: 2}
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
