import React from 'react';
import Home from './Home';
import Note from './Note';
import NoteInfo from './NoteInfo';
import { Route , Link } from 'react-router-dom';




function App () {
    
  return (
    <div>
      <header>
        <h1>
          <Link to={'/'}>Noteful</Link>
        </h1>
      </header>
      <Route exact path='/' component={Home} />
      <Route path='/folder/:folderId' component={Note} />
      <Route path='/notes/:id' component ={NoteInfo} />
    
    </div>
    );
}

export default App;
