import React from 'react';
import List from './components/List';
import './App.css';

function App(props) {
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes</h1>
      </header>
        <div className="App-list">
        {props.store.lists.map(list => {
          return <List 
            header={list.header} 
            Cards={list.cardIds.map(id => {
            const newCard = props.store.allCards[id];
            newCard.id = id;
            return newCard;
            })}
            key={list.id}>
          </List>
        })}  
        </div>
    </main>
  );
}

export default App;
