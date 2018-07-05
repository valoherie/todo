const todoRoutes = require('./note_routes');

module.exports = function(app, db) {
  todoRoutes(app, db);
  // Other route groups could go here, in the future
};
