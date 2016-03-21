'use strict';

const alt = require('../lib/alt');
const LogActions = require('../actions/LogActions');
const NotificationActions = require('../actions/NotificationActions');

class LogStore {
  constructor() {
    this.messages = [];

    this.bindListeners({
      incomingNotification: NotificationActions.INCOMING,
      handleIncomingMessages: LogActions.INCOMING_MESSAGE
    });
  }

  incomingNotification(data) {
    debugger;
    switch (data.type) {
      case 'log':
        const message = data.payload.message;
        this.messages.push(message);
        break;
    }
  }

  handleIncomingMessages(messages) {
    messages.forEach((message) => this.messages.push(message));
  }
}

module.exports = alt.createStore(LogStore, 'LogStore');
