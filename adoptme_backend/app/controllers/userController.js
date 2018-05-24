const User = require('../models/userModel.js');
const httpStatus = require('http-status');


/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(httpStatus.CREATED);
        res.json(savedUser.transform());
    } catch (error) {
        next(User.checkDuplicateEmail(error));
    }
  };

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
      const users = await User.list(req.query);
      const transformedUsers = users.map(user => user.transform());
      res.json(transformedUsers);
    } catch (error) {
      next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
      const { user } = await User.findUser(req.body);
      const userTransformed = user.transform();
      return res.json({user: userTransformed });
    } catch (error) {
      return next(error);
    }
};

exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
        message: "Advert content can not be empty"
    });
}

  // Find User and update it with the request body
  User.findByIdAndUpdate(req.params.userId, {
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          });
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          });                
      }
      return res.status(500).send({
          message: "Error updating user with id " + req.params.userId
      });
  });
};

exports.get = async (req, res, next) => {
  try{
    console.log(req.params.userId);
    const user = await User.get(req.params.userId);
    const userTransformed = user.transform();
    return res.json({user: userTransformed });
  }catch(error){
    next(error);
  }
};