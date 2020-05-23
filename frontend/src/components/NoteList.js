import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  let displayAllNotes = () => {
    return props.notes.map(note => <NoteItem note={note} key={note.id} selectNote={props.selectNote} />)
  }

  return (
    <ul>
      {displayAllNotes()}
    </ul>
  );
}

export default NoteList;
