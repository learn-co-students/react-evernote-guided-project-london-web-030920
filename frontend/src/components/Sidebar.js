import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  createNewNote = () => {
    fetch("http://localhost:3000/api/v1/notes/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'Add Title',
        body: 'Add Details'
      })
    }).then(note => note.json())
    .then(newNote => this.props.addNewNote(newNote))
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} selectNote={this.props.selectNote} />
        <button onClick={() => this.createNewNote()}>New</button>
      </div>
    );
  }
}

export default Sidebar;
