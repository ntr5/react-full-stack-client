import React from 'react'

// functional component
export const JournalEntry = props => {
    console.log(props.id)
    return (
        <div>
            <p>{props.id}</p>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
        </div>
    )
}