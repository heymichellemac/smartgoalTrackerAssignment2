var _ = require('lodash')
var User = require('./user.model');

function handleError(res, err) {
  return res.send(500, err);
}

//Show all users
exports.index = function(req, res) {
  User.find(function (err, users) {
    if(err) { return handleError(res, err); }
    return res.json(200, users);
  });
};

//Create a new user
exports.create = function(req, res) {
  req.body.smartgoals = []
  User.create(req.body, function(err, user) {
    if (err) { return handleError(res, err); }
    return res.json(201, user);
    });
};

//Show a user
exports.show = function(req, res) {
  User.findById(req.params.id, function (err, user) {
    if(err) { return handleError(res, err); }
    return res.json(200, user);
  });
};

// Add a smartgoal for a user
exports.add_smartgoal = function(req, res) {
  User.findById(req.params.id, function (err, user) {
    var smartgoal = {
      goaltitle: req.body.goaltitle,
      specific: req.body.specific,
      measurable: req.body.measurable,
      achievable: req.body.achievable,
      relevant: req.body.relevant,
      duedate: req.body.duedate,
      currentstatus: req.body.currentstatus
    }
    user.smartgoals.push(smartgoal)
    user.save(function (err) {
      if(err) { return handleError(res, err); }
      var last = _.last(user.smartgoals)
      if (last != undefined) {
        return res.json(200, last);
      } else {
        return res.send(500,"Database error")
      }
    });
  });
};
