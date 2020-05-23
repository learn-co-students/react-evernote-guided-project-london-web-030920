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


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectNote={this.selectNote} selectedNote={this.state.selectedNote} />
          <Content selectedNote={this.state.selectedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
