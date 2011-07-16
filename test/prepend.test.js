var assert = require('assert')
  , connect = require('connect');

var mw1 = function(req, res, next) {
  next();
}

var mw2 = function(req, res, next) {
  next();
}

var mw3 = function(req, res, next) {
  next();
}

var mw4 = function(req, res, next) {
  next();
}

module.exports = {

  'prepend middleware': function() {
    var app = connect.createServer()
        .use(mw1)
        .use('/mw2', mw2)
        .use(mw3, true)
        .use('/mw4', mw4, true);
    var expected = [mw4, mw3, mw1, mw2];
    app.stack.forEach(function(val, index) {
      assert.equal(val.handle, expected[index]);
    }, this);
  }

};

