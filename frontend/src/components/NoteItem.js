import React from 'react';

const NoteItem = (props) => (

  <li onClick={() => {props.selectNote(props.note)}}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.length > 20 ? props.note.body.substring(0, 18) + "..." : props.note.body}</p>
    <button onClick={() => props.deleteNote(props.note.id)}>Delete</button>
  </li>
);

export default NoteItem;
