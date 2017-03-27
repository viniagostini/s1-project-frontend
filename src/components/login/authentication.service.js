(function () {
    'use strict';

    angular.module('addExtreme').factory('AuthenticationService', Service);

    function Service($http, $window, HTTP_CONSTANTS, API_ENDPOINTS, MESSAGES) {
        var service = {};

        service.login = login;
        service.logout = logout;

        return service;

        function login(email, senha, callback) {
            var login_url = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.LOGIN;

            $http.post(login_url, { email: email, senha: senha }).then(success, err)

            function success (response) {
                var token = response.data.token;
                if (token) {
                    $window.localStorage.userId = response.data.userId;
                    $http.defaults.headers.common.Authorization = 'Bearer ' + token;
                    console.log(token);
                    callback(true, MESSAGES.USER_SUCCESSFULY_AUTHENTICATED);
                } else {
                    callback(false, MESSAGES.UNKONUWN_ERROR);
                }
            }

            function err (response) {
                callback(false, MESSAGES.WRONG_USERNAME_OR_PASSWORD);
            }

        }

        function logout() {
            $window.localStorage.userId  = '';
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();