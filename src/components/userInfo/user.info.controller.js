angular.module('addExtreme').controller('UserInfoController', function ($scope, $window, userService) {
    $scope.title = "Page 1";
    $scope.user = {};

    function init(){
        var userId = $window.localStorage.userId;
        console.log('userId: ' + userId);
        userService.getUserById(userId, function (user) {
            $scope.user = user;
            console.log(user);
        });
    }
    init();

    $scope.dismissAlerts = function () {
        $scope.errorMsg = "";
        $scope.showErrorMsg = false;
    };

    $scope.clearForm = function () {
        $scope.user = {};
    };

    $scope.editUser = function (user, userInfoForm) {
        if(userInfoForm.$valid){

            $scope.clearForm();
            userService.editUser(user, function(){
                userService.getUserById(user.id, function (response) {
                    $scope.user = response;
                })
            })
        }
    };
    
    $scope.loadEditedUser = function () {
        userService.getUserById($scope.user.id, function (response) {
            $scope.editedUser = response;
        })
    };
});
