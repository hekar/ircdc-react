'use strict';

const SockJS = require('sockjs-client');
const alt = require('./alt');

const listeners = {};
let sock = undefined;

function bootstrap(url) {
  if (url) {
    try {
      connect(url);
    } catch (e) {
      debugger;
    }
  }
}

function connect(url) {
  sock = new SockJS(url);
  sock.onopen = function() {
    fire('open');
  };

  sock.onmessage = function(e) {
    const message = JSON.parse(e.data);
    fire('message', message);

    debugger;
    alt.dispatch('NotificationActions.incoming', message);
  };

  sock.onclose = function() {
    fire('close');
  };
}

function send() {
  sock.send.apply(this, arguments);
}

function disconnect() {
  sock.close();
}

/**
 * listen - Listen to messages
 *
 * Types: 'open', 'message', 'close'
 *
 * @param  {string} type
 *  Types: 'open', 'message', 'close'
 * @param  {function} callback
 *  (data) => { ... }
 *  'data' argument is only populated on 'message'
 * @return {undefined}
 */
function listen(type, callback) {
  if (!listeners[type]) {
    listeners[type] = [];
  }

  listeners[type].push(callback);
}

function fire(type, data) {
  console.log('sock message received', arguments)
  if (listeners[type]) {
    listeners.forEach((listener) => listener(data));
  }
}

module.exports = {
  bootstrap,
  connect,
  disconnect,
  send,
  listen
};
