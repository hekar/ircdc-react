'use strict';

const alt = require('../lib/alt');
const LogActions = require('../actions/LogActions');

class LogStore {
  constructor() {
    this.messages = [];

    this.bindListeners({
      handleIncomingMessages: LogActions.INCOMING_MESSAGE
    });
  }

  handleIncomingMessages(messages) {
    messages.forEach((message) => this.messages.push(message));
  }
}

module.exports = alt.createStore(LogStore, 'LogStore');
