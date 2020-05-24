import React from 'react';

const NoteItem = (props) => (

  <li onClick={() => {props.selectNote(props.note)}}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.length > 30 ? props.note.body.substring(0, 22) + "..." : props.note.body}</p>
  </li>
);

export default NoteItem;
