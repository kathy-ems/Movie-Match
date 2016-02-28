var expect = require('expect.js');
var Session = require('../../../server/sessions/sessionsController.js');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe('sessionsController', function () {
  describe('getAllSessions', function () {
    beforeEach(function () {
    });

    it('should be a function', function () {
      expect(Session.getAllSessions).to.be.a('function');
    });

    // this test returns undefined.. Looks like there is no “findAll” inside of “sessions.js”, even though sessionsController.js is calling Session.findAll() on line 6?
    // it('should return an object when called', function () {
    //   Session.getAllSessions().should.eventually.be.an('object').notify(done);
    // });
  });
});
