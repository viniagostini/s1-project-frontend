/**
 * Created by matheus on 16/03/17.
 */
angular.module('addExtreme').controller('NavbarController', function ($scope, AuthenticationService, $state) {

    $scope.logout = function () {
      AuthenticationService.logout();
      $state.go('login');
    };
});