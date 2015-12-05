// /*
//  * POST MODEL
//  */

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;

// var GameSchema = new Schema({
//     created_at: { type: Date, default: Date.now() },
//     updated_at: { type: Date },
//     title: { type: String, required: true, trim: true },
//     content: { type: String, required: true, trim: true }
// });

// // MIDDLEWARE
// GameSchema.pre('save', function(next){
//   // set a created_at and update updated_at
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });

// // export post model
// var Game = mongoose.model('Game', GameSchema);

// module.exports = Game;
