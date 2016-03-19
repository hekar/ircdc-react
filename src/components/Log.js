'use strict';

/*global ace */

import React from 'react';
import { Component } from 'reactcss';
import ReactDom from 'react-dom';

/**
 * Chat Log
 */
export default class Log extends Component {
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
