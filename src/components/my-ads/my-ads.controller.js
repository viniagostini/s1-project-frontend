/**
 * Created by matheus on 13/03/17.
 */
angular.module('addExtreme').controller('MyAdsController', function ($scope, $window, anuncioService, userService) {

    $scope.ad = {};
    $scope.user = {};

    function init (){
        getUser();
    }

    function getUser() {
        var userId = $window.localStorage.userId;
        console.log('userId: ' + userId);
        userService.getUserById(userId, function (user) {
            $scope.user = user;
            console.log(user);
        });
    }

    init();


    $scope.clearForm = function () {
      $scope.ad = {};
    };

    $scope.deleteAd = function (id) {
        anuncioService.deleteAnuncio(id, function (response) {
            getUser();
        });
    };

    $scope.createAd = function (ad, adForm) {
        if(adForm.$valid){
                $scope.clearForm();
                anuncioService.createAnuncio(ad, function(){
                   getUser();
                })

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
