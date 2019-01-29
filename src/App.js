import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store';


function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {

  state = {
    lists: STORE.lists,
    cards: STORE.allCards
  }

  handleDelete = (cardId)=>{
    console.log('delete a card; called', cardId);
    const newAllCards = omit(this.state.cards, cardId);
    const newLists = this.state.lists.map(list=>{
      console.log('itterating through lists', list)
      list.cardIds = list.cardIds.filter(id=>{
        console.log('checking if id equals id to be deleted', id)
        return id !== cardId;
      })
      return list;
    })
    console.log('checking new list to make sure has been deleted', newLists);
    
    this.setState({
      cards: newAllCards,
      lists: newLists
    })
  }

  handleNewCard = (listId)=>{
    console.log('add new card', listId);
    const newCard = newRandomCard();

    const UpdatedList = this.state.lists.map(list=>{
      if (listId === list.id){
        list.cardIds.push(newCard.id)
      }
      return list;
    })

    this.setState({
      lists: UpdatedList,
      cards: {...this.state.cards,
        [newCard.id]: newCard}
    })
  }


  render() {
    console.log('the state of the crds', this.state.cards);
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes</h1>
      </header>
        <div className="App-list">
        {this.state.lists.map(list => {
          return <List 
            header={list.header} 
            Cards={list.cardIds.map(id => {
            const newCard = this.state.cards[id];
            newCard.id = id;
            return newCard;
            })}
            key={list.id}
            listId={list.id}
            onDeleteItem={this.handleDelete}
            onAddCard={this.handleNewCard}>
          </List>
        })}  
        </div>
    </main>
  )
  }
}

export default App;
