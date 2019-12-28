const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/userController');

/**User Route For Registration */
UserRouter.route('/')
  .post((req, res, next) => {
    UserController.Register(req.body).then(response=>{
      return res.status(200).send(response);
    }).catch(err=>{
      next(err);
    })
  });

module.exports = UserRouter;
