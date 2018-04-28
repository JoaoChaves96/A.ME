var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.post('/user', (req, res) => {
        const user = {username: req.body.username, password: req.body.password};
        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        })
    })

    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('users').findOne(details, (err, user) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(user);
            }
        })
    });

    app.delete('/user/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('users').remove(details, (err, user) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send('User ' + id + ' deleted');
            }
        })
    });

    app.put('/user/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const user = {username: req.body.username, password: req.body.password};
        db.collection('users').update(details, user, (err, user) => {
            if (err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(user);
            }
        })
    });
};