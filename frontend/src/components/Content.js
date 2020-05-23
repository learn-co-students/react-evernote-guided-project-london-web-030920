import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    editor: false
  }

  switchEditorState = () => {
    this.setState({
      editor: !this.state.editor
    });
  };

  renderContent = () => {

    const displayNote = !!this.props.selectedNote
  
    if (this.state.editor === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} switchEditorState={this.switchEditorState} />;
    } else if (displayNote === true) {
      return <NoteViewer selectedNote={this.props.selectedNote} switchEditorState={this.switchEditorState} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
