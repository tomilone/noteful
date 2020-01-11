import React from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';



export default function Home (){
  
  return(
    <div>
      <header>
      </header>
      <main>
        <FolderList />

      <section>
        <NoteList />
      </section>
      </main>
    </div>
  )
}