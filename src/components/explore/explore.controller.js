/**
 * Created by matheus on 17/03/17.
 */
angular.module('addExtreme').controller('ExploreController', function ($scope, $window, anuncioService, userService) {

    $scope.allAds = [];
    $scope.user = {};

    function init (){
        getAllAds();
        getUser();
    }

    function getAllAds() {
        anuncioService.getAllAnuncios(function (response) {
            $scope.allAds = response;
        });
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

    $scope.buyAd = function(anuncio) {
        var isConfirmed = confirm('Tem certeza?');
        if(isConfirmed){
            anuncioService.comprarAnuncio(anuncio, function(){
                getAllAds();
            });
            console.log("COMPRADO!");
        }else{
            console.log("CANCELADO!");
        }
    }
});