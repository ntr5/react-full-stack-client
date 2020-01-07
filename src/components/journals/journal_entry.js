import React from 'react'

// functional component
export const JournalEntry = props => {
    return (
        <div>
            <p>{props.id}</p>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}