'use strict';

import React from 'react';
import { Component } from 'reactcss';
import Log from './Log';
import UserList from './UserList';
import Say from './Say';

import { flex, vflex } from '../styles/';

// TODO: Connect to stores
export default class Channel extends Component {
  classes() {
    return {
      'default': {
        flex: Object.assign({ flexGrow: 5 }, flex),
        vflex: Object.assign(vflex, { flexWrap: 'wrap', flexGrow: 5 })
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { session } = this.props;
    return (
      <div is="flex">
        <div is="vflex">
          <Log session={session} />
          <Say session={session} />
        </div>
        <UserList session={session} />
      </div>
    );
  }

}
