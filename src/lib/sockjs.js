'use strict';

const SockJS = require('sockjs-client');

const listeners = {};
let sock = undefined;

function bootstrap(url) {
  if (url) {
    try {
        connect(url);
    } catch (e) {
      console.error(e);
    }
  }
}

function connect(url) {
  sock = new SockJS(url);
  sock.onopen = function() {
    fire('open');
  };

  sock.onmessage = function(e) {
    fire('message', e.data);
  };

  sock.onclose = function() {
    fire('close');
  };
}

const send = sock.send;

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
  debugger;
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
