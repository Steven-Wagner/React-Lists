import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
        <div className="Card">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
            <button onClick={()=>this.props.onDeleteItem(this.props.id)}>Delete</button>
        </div>
        );
    } 
}

export default Card;