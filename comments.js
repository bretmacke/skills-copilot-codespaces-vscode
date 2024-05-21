// Create web server
// Create a new comment
// Get all comments
// Get a specific comment
// Update a comment
// Delete a comment

const express = require('express');
const comments = express.Router();
const Comment = require('../models/comment.js');

// Create a new comment
comments.post('/new', (req, res) => {
  Comment.create(req.body, (err, createdComment) => {
    if(err){
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(createdComment);
  });
});

// Get all comments
comments.get('/', (req, res) => {
  Comment.find({}, (err, foundComments) => {
    if(err){
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundComments);
  });
});

// Get a specific comment
comments.get('/:id', (req, res) => {
  Comment.findById(req.params.id, (err, foundComment) => {
    if(err){
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundComment);
  });
});

// Update a comment
comments.put('/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
    if(err){
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(updatedComment);
  });
});

// Delete a comment
comments.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, deletedComment) => {
    if(err){
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedComment);
  });
});

module.exports = comments;