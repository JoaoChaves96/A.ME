module.exports = (app) => {
    const users = require('../controllers/userController.js');

    // Create a new User
    app.post('/user/create', users.create);

    // Retrieve all Users
    app.get('/users', users.list);

    //login
    app.post('/user/auth', users.login);

    //get User
    app.get('/user/:userId', users.get);

    app.put('/user/:userId', users.update);
}