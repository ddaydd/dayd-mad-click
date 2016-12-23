'use strict';
if(typeof(Dayd) == 'undefined') Dayd = {};

class madClick {

  constructor() {
    this.scores = [];
    var scores = MadClick.find({}, {sort: {score: 1}}).fetch();
  }

  btnClick() {
    Meteor.call('addClick');
  }
}

Dayd.MadClick = madClick;
