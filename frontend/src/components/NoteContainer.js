import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes/")
      .then(res => res.json())
      .then(notes => this.setState({ notes }));
  };

  selectNote = (note) => {
    this.setState({
      selectedNote: note
    })
  }

  addNewNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  renderUpdatedNote = (updatedNote) => {
    const updateNotes = this.state.notes.map(note => note.id === updatedNote.id ? note = updatedNote : note )

    this.setState({
      notes: updateNotes,        
      selectedNote: updatedNote
    })

  }


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} addNewNote={this.state.addNewNote} />
          <Content selectedNote={this.state.selectedNote} renderUpdatedNote={this.renderUpdatedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
