angular.module('addExtreme').controller('LoginController', function ($scope, $state, AuthenticationService) {
    $scope.title = "Login";

    $scope.user = {};

    $scope.goToSignup = function () {
        $state.go('signup');
    };

    $scope.submitForm = function(user, userForm) {
        // check to make sure the form is completely valid
        if (userForm.$valid) {
            AuthenticationService.login(user.email, user.pass, function(isAuthenticated, message){
                if(isAuthenticated){
                    $state.go('home.user-info');
                }else{
                    showErrorAlert(message);
                }
            });
        }
    };

    $scope.dismissAlerts = function () {
        $scope.errorMsg = "";
        $scope.showErrorMsg = false;
    };

    function showErrorAlert (msg) {
        $scope.errorMsg = msg;
        $scope.showErrorMsg = true;
    }

});