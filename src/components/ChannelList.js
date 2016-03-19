'use strict';

import React from 'react';
import { Component } from 'reactcss';


class ChannelItem extends Component {
  classes() {
    return {
      'default': {
        channel: {
          fontWeight: 'bold',
          fontSize: '1.2em',
          marginBottom: '4px',
          borderRadius: '6px',
          padding: '6px 22px',
          color: '#DFF5F4',
          backgroundColor: '#438FA9'
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { channel } = this.props;
    return (
      <div is="channel">
        {channel.name}
      </div>
    );
  }
}

class Title extends Component {
  classes() {
    return {
      'default': {
        title: {
          fontWeight: 'bold',
          fontSize: '1.4em',
          marginBottom: '12px',
          padding: '6px 10px',
          color: '#438FA9',
          backgroundColor: '#DFF5F4'
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

// TODO: Connect to ChannelList Store
export default class ChannelList extends Component {
  classes() {
    return {
      'default': {
        box: {
          width: '220px'
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

  renderChannels(channels) {
    return channels.map((channel) => <ChannelItem channel={channel} />);
  }

  render() {
    const channels = [
      '#elixir-lang',
      '#reactjs'
    ].map((name) => {
      return { name };
    });

    const renderedChannels = this.renderChannels.call(this, channels);
    return (
      <div is="box">
        <Title title={'freenode'} />
        {renderedChannels}
      </div>
    );
  }
}
