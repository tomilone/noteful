import React from 'react';
import store from './Store';
import { Link } from 'react-router-dom';


export default function NoteList (){
  return (
    <>
      
      
      <ul>
        {store['notes'].map((notes,i) =>
          <li key={i}>
            <Link to={`/notes/${notes.id}`}>
              {notes.name}
            </Link>
            <span>{notes.modified}</span>
          </li>
        )}
      </ul>
      
      
    </>
  )
}