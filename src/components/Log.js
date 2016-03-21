'use strict';

/*global ace */

import connectToStores from 'alt-utils/lib/connectToStores';
import React from 'react';
import { Component } from 'reactcss';
import ReactDom from 'react-dom';
import LogStore from '../stores/LogStore';

/**
 * Chat Log
 */
@connectToStores
export default class Log extends Component {
  static getStores() {
    return [LogStore];
  }

  static getPropsFromStores() {
    return LogStore.getState();
  }

  classes() {
    return {
      'default': {
        box: {
          flexGrow: '1'
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      editor: undefined
    };
  }

  componentDidMount() {
    const node = ReactDom.findDOMNode(this);
    const editor = ace.edit(node);
    editor.setTheme('ace/theme/monokai');
    editor.setReadOnly(true);
    //editor.getSession().setMode('ace/mode/javascript');

    const renderer = editor.renderer;
    renderer.setShowGutter(false);
    renderer.setPrintMarginColumn(false);
    this.setState({ editor })
  }

  render() {
    return (
      <div is="box"></div>
    );
  }
}
