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
class Log extends Component {
  static getStores() {
    return [LogStore];
  }

  static getPropsFromStores() {
    return {
      log: LogStore.getState()
    };
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

    const renderer = editor.renderer;
    renderer.setShowGutter(false);
    renderer.setPrintMarginColumn(false);

    const session = editor.getSession();
    const document = session.getDocument();

    this.setState({ editor, document })
  }

  render() {
    const log = this.props.log;
    const editorDoc = this.state.document;
    if (log && editorDoc) {
      const messages = log.messages;
      const fullMessageLog = messages.join('\n');
      editorDoc.setValue(fullMessageLog);
    }

    return (
      <div is="box"></div>
    );
  }
}

export default connectToStores(Log);
