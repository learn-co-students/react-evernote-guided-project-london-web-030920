import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: null,
    editor: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes/")
      .then(res => res.json())
      .then(notes => this.setState({ notes }));
  };

  selectNote = (note) => {
    this.setState({
      selectedNote: note,
      editor: false
    })
  }

  addNewNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  addUpdatedNote = (updatedNote) => {
    const updateNotes = this.state.notes.map(note => note.id === updatedNote.id ? note = updatedNote : note )

    this.setState({
      notes: updateNotes,        
      selectedNote: updatedNote
    })

  }

  switchEditorState = () => {
    console.log("woah")
    this.setState({
      editor: !this.state.editor
    });
  };


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} addNewNote={this.addNewNote} />
          <Content selectedNote={this.state.selectedNote} addUpdatedNote={this.addUpdatedNote} switchEditorState={this.switchEditorState} editorState={this.state.editor} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
