import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        return (
            <section className="List">
            <header>
                <h2>{this.props.header}</h2>
            </header>
            <div className="List-cards">
                {this.props.Cards.map(card => {
                    return (<Card 
                        title={card.title} 
                        content={card.content}
                        key={card.id}
                        id={card.id}
                        onDeleteItem={this.props.onDeleteItem}>
                    </Card>)
                })}
            </div>
            <button onClick={()=>this.props.onAddCard(this.props.listId)}>Add a random card</button>
            </section>
        )
    } 
}

export default List;