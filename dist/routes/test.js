"use strict";

module.exports = function (app) {
  // const Tasks = app.db.models.Tasks;
  app.route('/test').get(function (req, res) {
    res.send('this is a test');
  }).post(function (req, res) {});
};