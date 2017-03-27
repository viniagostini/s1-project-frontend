(function () {
    'use strict';

    angular.module('addExtreme').factory('userService', Service);

    function Service($http, HTTP_CONSTANTS, HTTP_RESPONSES, API_ENDPOINTS, MESSAGES) {
        var service = {};

        service.getUserById = getUserById;
        service.editUser = editUser;

        return service;

        function getUserById (userId, callback){
            var userUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.USER;

            $http.get(userUrl + '/' + userId).then(success, err)

            function success(response) {
                callback(response.data);
                console.log(response);
            }

            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }

        }
        
        function editUser(user, callback) {
            var userUrl = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.USER;

            $http.put(userUrl, user).then(success, err)

            function success(response) {
                callback(response.data);
                console.log(response);
            }

            function err(response) {
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }
        }

    }
})();