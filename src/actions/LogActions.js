'use strict';

const alt = require('../lib/alt');

class LogActions {
  constructor() {
    // TODO: Clear, archive, scrollback, etc
    this.generateActions('incomingMessage');
  }

}

export default alt.createActions(LogActions);
