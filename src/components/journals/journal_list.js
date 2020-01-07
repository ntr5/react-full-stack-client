import React, { Component } from 'react';
// import a functional component
import { JournalEntry } from './journal_entry'

const rawJournalDAta = [
    { title: 'Post One', content: 'Post content', status: 'draft'},
    { title: 'Post Two', content: 'Post content', status: 'published'},
    { title: 'Post Three', content: 'Post content', status: 'published'},
    { title: 'Post Four', content: 'Post content', status: 'published'}
]

// class component
export default class JournalList extends Component {
    constructor(props) {
        super()

        // this.state = {
        //     journalData: rawJournalDAta,
        //     greeting: 'Hi there',
        //     isOpen: true
        // }
        this.state = {
            journalData: [],
            greeting: "hi there",
            isOpen: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/journal_entries')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    journalData: data,
                    isOpen: true
                })
            })
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false })
    }

    showAllEntries = () => {
        fetch('http://localhost:5000/journal_entries')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    journalData: data,
                    isOpen: true
                })
            })
    }

    // showAllEntries = () => {
    //     this.setState({ journalData: rawJournalDAta, isOpen: true })
    // }

    toggleStatus = () => {
        if(this.state.isOpen) {
            this.setState({journalData: [], isOpen: false})
        } else {
            this.showAllEntries()
        }
    }

    

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry title={journalEntry.title} content={journalEntry.content} id={journalEntry.id} />
                </div>
            )
        })

        return (
            <div>
                <h2>{this.props.heading}</h2>
                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                {this.state.isOpen ? null : 
                <button onClick={this.showAllEntries}>Show All Entries</button>
                }
                <button onClick={this.toggleStatus}>Toggle Entries</button>
                {journalEntries}
                
            </div>
        );
    }
}