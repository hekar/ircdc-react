'use strict';

const alt = require('../lib/alt');

class NotificationActions {
  constructor() {
    this.generateActions('incoming');
  }
}

export default alt.createActions(NotificationActions);
