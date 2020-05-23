import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  let displayNotes = () => {
    return props.notes.map(note => <NoteItem note={note} />)
  }

  return (
    <ul>
      {displayNotes()}
    </ul>
  );
}

export default NoteList;
