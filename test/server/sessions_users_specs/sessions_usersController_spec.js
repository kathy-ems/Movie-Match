var expect = require('expect.js');
var assert = require('assert');

var Session = require('../../../server/sessions_users/sessions_usersController.js');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe('Session_UserController', function () {
  describe('getUsersInOneSession', function () {

    it('should be a function', function () {
      expect(Session.getUsersInOneSession).to.be.a('function');
    });

    // returns undefined
    // it('should return an array', function () {
    //   Session.getUsersInOneSession("philz").should.eventually.be.ok.notify(done);
    // });
  });
});
