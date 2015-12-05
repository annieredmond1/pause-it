var express = require('express');
var Game = require('../models/game.js');

module.exports = function(app) {
  // INDEX 
  app.get('/api/games', function(req, res){
    // INDEX - GET ALL POSTS
    Game.find().sort('-created_at').exec(function(err, games) {
      if (err) { return res.status(404).send(err); }
      res.send(games); 
    });    
  });

  // CREATE
  app.post('/api/games', function(req,res){  
   // var post = new Post({ content: req.body.content });
   // post.save(function (err, post) {
    Game.create(req.body, function(err, game){
      if (err) { return res.send(err); }
      console.log(game);
      res.status(201).send(game);
    });
  });

  app.get('/api/games/:game_id',function(req,res){   
    Game.findById(req.params.game_id, function(err, game) {
      if (err) { return res.status(404).send(err); }
      res.send(game); 
    });
  });

    // full update of one game by id
  app.put('/api/games/:game_id', function(req,res){ 
    Game.findOneAndUpdate({ _id: req.params.game_id}, req.query.game, function (err, game) {
      if (err) { return res.send(err); }
      res.send(game);
    });
  })

    // delete one game by id
  app.delete('/api/games/:game_id', function(req,res){   
    Post.findByIdAndRemove(req.params.game_id, function (err, game) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });
}