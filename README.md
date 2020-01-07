# Skeleton React starter Project

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

Homework 1/3/2020:

Build a full stack app with React and a Flask API.

Today we used hard coded "journal entry" data to dynamically render components in React. I want you to build out a backend in Flask and Python, and fetch that data from your API instead of hard coding values. Your API must include the following:

A Journal Entry type Schema with the following fields: 
id, title, content

POST route
* Post should require the journal title and the content
GET route
* Get should dump and return all records
DELETE route

I do not want a form on the front end to post data. Interact with your POST route using Postman.
 
Replicate the React app we built out with Jordan, but instead of hard coding the raw journal data use the componentDidMount lifecycle hook to fetch the live api data. I want the toggle functionality intact, display the Title and the Content of each entry, AND I want you to add a click handler on each title that will delete a journal entry. Once deleted, your component needs to automatically update.

Add some styles, make it yours add some bells and whistles, have fun with it. You have all of the tools necessary to achieve this.

Push to github as you go along.# react-full-stack-client
