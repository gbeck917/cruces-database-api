"use strict";

module.exports = function (app) {
  var Cruces = app.db.models.Cruces;
  app.route('/cruces').get(function (req, res) {
    Cruces.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    Cruces.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
  app.route('/cruces/:id').get(function (req, res) {
    Cruces.findOne({
      where: req.params
    }).then(function (result) {
      if (result) {
        res.json(result);
      } else {
        res.sendStatus(404);
      }
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Cruces.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Cruces.destroy({
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(204).json({
        msg: error.message
      });
    });
  });
};