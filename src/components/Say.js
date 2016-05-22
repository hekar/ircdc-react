'use strict';

import $ from 'jquery';
import React from 'react';
import { Component } from 'reactcss';
import ReactDom from 'react-dom';
import { say } from '../actions/SayActions';

import { flex } from '../styles/';

export default class Say extends Component {
  classes() {
    return {
      'default': {
        box: Object.assign(flex, {
          alignSelf: 'stretch',
          borderTop: '1px solid grey'
        }),
        name: {
          display: 'inline-block',
          alignSelf: 'center',
          fontSize: '1.2em',
          paddingLeft: '6px',
          paddingRight: '6px'
        },
        input: {
          height: 'inherit',
          fontSize: '1.3em',
          padding: '3px 6px',
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none'
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const node = ReactDom.findDOMNode(this.refs.say);
    $(node).on('keypress', function(e) {
      const enter = 13;
      const escape = 27;
      if (e.which === enter) {
        const message = '';
        this.say(message);
      } else if (e.which === escape) {
      }
    })
  }

  say(message) {
    const currentUser = {
      userId: 'bam',
      token: 'jam'
    };
    say(currentUser,
      'other', message);
  }

  render() {
    return (
      <div is="box">
        <div is="name">hekar</div>
        <input is="input" ref="say" type="text" />
      </div>
    );
  }
}
