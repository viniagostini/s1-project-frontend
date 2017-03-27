angular.module('addExtreme').controller('SignupController', function ($scope, SignUpService) {

    $scope.errorMsg = "";
    $scope.showErrorMsg = false;
    $scope.successMsg = "";
    $scope.showSuccessMsg = false;

    $scope.dismissAlerts = function () {
        $scope.errorMsg = "";
        $scope.showErrorMsg = false;
        $scope.successMsg = "";
        $scope.showSuccessMsg = false;
    };

    function alertSuccess(msg) {
        $scope.dismissAlerts();
        $scope.successMsg = msg;
        $scope.showSuccessMsg = true;
    };

    function alertError(msg) {
        $scope.dismissAlerts();
        $scope.errorMsg = msg;
        $scope.showErrorMsg = true;
    };

    $scope.createUser = function(user, userForm) {
        if(user.pass !== user.confirmPass){
            alertError("Passwords are different");
        }else

        if (userForm.$valid) {
            SignUpService.createUser(user, function(isCreated, message){
                if(isCreated){
                    alertSuccess(message);
                }else{
                    alertError(message);
                }
            });
            clearForm();
            console.log($scope.user);
        }
    };

    function clearForm() {
        $scope.user = {};
    };
});