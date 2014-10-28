'use strict';

describe('Service: Blogservice', function () {

  // load the service's module
  beforeEach(module('myresumepageApp'));

  // instantiate service
  var Blogservice;
  beforeEach(inject(function (_Blogservice_) {
    Blogservice = _Blogservice_;
  }));

  it('should do something', function () {
    expect(!!Blogservice).toBe(true);
  });

});
