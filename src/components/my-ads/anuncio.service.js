(function () {
    'use strict';

    angular.module('addExtreme').factory('anuncioService', Service);

    function Service($http, $window, HTTP_CONSTANTS, HTTP_RESPONSES, API_ENDPOINTS, MESSAGES) {
        var service = {};

        service.getAnuncioById = getAnuncioById;
        service.createAnuncio = createAnuncio;
        service.getAllAnuncios = getAllAnuncios;
        service.deleteAllAnuncios = deleteAllAnuncios;
        service.deleteAnuncio = deleteAnuncio;
        service.comprarAnuncio = comprarAnuncio;

        return service;

        function getAnuncioById (anuncioId, callback){
            var anuncioUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.ANUNCIO;

            $http.get(anuncioUrl, {id: anuncioId}).then(success, err)

            function success(response) {
                callback(response.data[0]);
                console.log(response);
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

        function getAllAnuncios (callback){
            var anuncioUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.ANUNCIO;

            $http.get(anuncioUrl).then(success, err)

            function success(response) {
                callback(response.data);
                console.log(response);
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

        function deleteAnuncio (anuncioId, callback){
            var anuncioUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.ANUNCIO;

            $http.delete(anuncioUrl + "/" + anuncioId).then(success, err)

            function success(response) {
                callback(response.data);
                console.log(response);
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

        function deleteAllAnuncios (callback){
            var anuncioUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.ANUNCIO;

            $http.delete(anuncioUrl).then(success, err)

            function success(response) {
                callback(response.data);
                console.log(response);
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

        function createAnuncio (anuncio, callback){
            var anuncioUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.ANUNCIO;
            anuncio.anunciante = {};
            anuncio.anunciante.id = $window.localStorage.userId;

            $http.post(anuncioUrl, anuncio).then(success, err)

            function success(response) {
                callback(response.data[0]);
                console.log(response);
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

        function comprarAnuncio (anuncio, callback){
            var compraUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.COMPRA;

            var compraObj = {
                anuncio : anuncio,
                comprador: {
                    id : $window.localStorage.userId
                }

            }

            $http.post(compraUrl, compraObj).then(success, err)

            function success(response) {
                callback();
            }
            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

    }


    
})();