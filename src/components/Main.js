require('normalize.css');
require('styles/App.css');

import $ from 'jquery';
import React from 'react';
import ReactCss from 'reactcss';
import Channel from './Channel';
import ChannelList from './ChannelList';

import { flex } from '../styles/';

export default class AppComponent extends ReactCss.Component {
  classes() {
    return {
      'default': {
        flex: Object.assign({ height: '100vh' }, flex)
      }
    };
  }

  constructor(props) {
    super(props);
    this.defaultProps = {
    }
  }

  componentWillMount() {
    $.get('//localhost:9071/api/messages/a/a/a');
  }

  render() {
    const session = {};
    return (
      <div is="flex">
        <ChannelList />
        <Channel session={session} />
      </div>
    );
  }
}
