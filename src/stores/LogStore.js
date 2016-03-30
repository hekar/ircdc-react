'use strict';

const alt = require('../lib/alt');

class LogStore {
  constructor() {
    this.bindAction(
      'NotificationActions.incoming',
      this.handleIncomingNotification
    );

    this.bindAction(
      'LogActions.incomingMessage',
      this.handleIncomingMessages
    );

    this.state = {
      messages: []
    };
  }

  handleIncomingNotification(data) {
    if (data.type) {
      const message = data.payload.message;
      this.setState({
        messages: this.state.messages.concat([message])
      });
    }
  }

  handleIncomingMessages(newMessages) {
    const messages = this.state.messages;
    this.messages.concat(newMessages);
    this.setState({ messages });
  }
}

export default alt.createStore(LogStore, 'LogStore');
