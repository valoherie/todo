var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('todo').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
app.post('/todo', (req, res) => {
    //db attr
	const todoitem = { text: req.body.body, title: req.body.title };
    db.collection('todo').insert(toddoitem, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  
  
    app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('todo').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Todo ' + id + ' deleted!');
      } 
    });
  });
  
  
  app.put('/todo/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('todo').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
  
};