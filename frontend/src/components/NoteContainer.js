import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    allNotes: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes/")
      .then(res => res.json())
      .then(allNotes => this.setState({ allNotes }));
  };




  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.allNotes} />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
