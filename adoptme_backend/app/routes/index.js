module.exports = (app) => {
    require('./userRoutes.js')(app);
    require('./advertRoutes.js')(app);
 }