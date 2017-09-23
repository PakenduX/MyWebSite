'use strict';

describe('Controller: AcceuilCtrl', function () {

  // load the controller's module
  beforeEach(module('pakenduxApp'));

  var AcceuilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcceuilCtrl = $controller('AcceuilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcceuilCtrl.awesomeThings.length).toBe(3);
  });
});
