'use strict';

import React from 'react';
import { Component } from 'reactcss';

class Username extends Component {

  classes() {
    return {
      default: {
        title: {
          fontSize: '1.2em',
          padding: '6px 12px',
          color: '#E0E6F2'
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div is="title">{this.props.user.name}</div>
    );
  }
}

class ChannelTitle extends Component {
  classes() {
    return {
      default: {
        title: {
          padding: '4px 4px',
          fontSize: '1.3em',
          borderBottom: '1px dashed #438FA9'
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div is="title">{this.props.title}</div>;
  }
}

// TODO: Connect to User store
export default class UserList extends Component {
  classes() {
    return {
      default: {
        list: {
          width: '140px',
          borderLeft: '1px solid #555'
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderUsers(users) {
    return users.map((user) => <Username user={user} />);
  }

  render() {
    const users = [
      'User 1',
      'User 2',
      'User 3',
      'User 4',
      'User 5',
      'User 6',
      'User 7',
      'User 8',
      'User 9',
      'User 10'
    ].map((name) => {
      return {
        name
      };
    });

    const renderedUsers = this.renderUsers(users);
    return (
      <div is="list">
        <ChannelTitle title="#elixir-lang" />
        {renderedUsers}
      </div>
    );
  }

}
