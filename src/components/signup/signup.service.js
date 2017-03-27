(function () {
    'use strict';

    angular.module('addExtreme').factory('SignUpService', Service);

    function Service($http, HTTP_CONSTANTS, HTTP_RESPONSES, API_ENDPOINTS, MESSAGES) {
        var service = {};

        service.createUser = createUser;

        return service;

        function createUser (user, callback){
            var signup_url = HTTP_CONSTANTS.COMPLETE_ADRESS + API_ENDPOINTS.USER;

            $http.post(signup_url, user).then(success, err)

            function success(response) {
                callback(true, MESSAGES.USER_SUCCESSFULY_CREATED);
                console.log(response);
            }


            function err(response){
                var message = response.status === HTTP_RESPONSES.CONFILCT ? MESSAGES.USER_ALREADY_EXISTS_ERROR : MESSAGES.UNKONUWN_ERROR;
                callback(false, message);
            }

        }

    }
})();