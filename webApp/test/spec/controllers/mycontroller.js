'use strict';

describe('Controller: MycontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var MycontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MycontrollerCtrl = $controller('MycontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MycontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
