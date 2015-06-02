'use strict';

var jasmine = require('jasmine');

var UserModelModule = require('../../app/services/UserModel');

describe('The UserModel', function() {
  var UserModel;

  beforeEach(function() {
    UserModel = new UserModelModule();
  });

  it('should have some todos initially', function() {
    var test = UserModel.test();
    expect(test).toBe(true);
  });
});