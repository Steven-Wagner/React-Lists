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
                        key={card.key}>
                    </Card>)
                })}
            </div>
            </section>
        )
    } 
}

export default List;