import React from 'react';
import store from './Store';
import { Link } from 'react-router-dom';



export default function Note (props){
  let id = props.match.params.folderId;
  let notes = store.notes.map(a =>
a.folderId === id ? <ul><li><Link to = {`/notes/${a.id}`} >{a.name}</Link> </li> <li>{a.modified}</li></ul>: null)

return (
  <div>
  {notes}
  </div>
)
  
}