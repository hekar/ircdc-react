
'use strict';
import alt from '../lib/alt';
import superagent from 'superagent';
import { gateway, contentType } from '../lib/server.js';

class SayActions {
  constructor() {}

  say(from, to, message) {
    return (dispatch) => {
      superagent
        .post(`${gateway}/api/say`)
        .send({
          userId: from.userId,
          to,
          message
        })
        // TODO: Create a module for this
        .set('Authorization', `Bearer ${from.token}`)
        .set('X-API-Key', from.apiKey)
        .set('Accept', contentType.json)
        .end(function(err, res) {
          if (err) {
            console.error(err);
            // TODO: Dispatch error message
          } else {
            dispatch(res.body || JSON.parse(res.text));
          }
        });
    };
  }
}

export default alt.createActions(SayActions);
