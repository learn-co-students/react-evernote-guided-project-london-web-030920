import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body,
  }

  editNote = (event) => {
    event.persist();
    event.preventDefault();

    fetch(`http://localhost:3000/api/v1/notes/${this.props.selectedNote.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
    .then(note => note.json())
    .then(updatedNote => this.props.addUpdatedNote(updatedNote))
    .then(this.props.switchEditorState)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)} />
        <textarea name="body" value={this.state.body} onChange={event => this.handleChange(event)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={event => this.editNote(event)} />
          <button type="button" onClick={() => this.props.switchEditorState()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
