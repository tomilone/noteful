import React from 'react';
import store from './Store';




export default function NoteInfo (props){
  let id = props.match.params.id;
  let content = store.notes.map(a => id === a.id ? <div><h3>{a.name}</h3><p>{a.modified}</p><p>{a.content}</p></div>: null)

  return (
    <div>
    <p>{content}</p>
    </div>
  )

}