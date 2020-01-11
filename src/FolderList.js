import React from 'react';
import { Link } from 'react-router-dom';
import store from './Store';



export default function Folders (){
  return (
   <>
    <ul>
      {store['folders'].map(folders =>
        <li key={folders.id}>
          <Link to={`/folder/${folders.id}`}>
            {folders.name}
          </Link>
        </li>
      )}
    </ul>
    
   

   </>
  )

}