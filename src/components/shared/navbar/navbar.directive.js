angular.module('addExtreme').directive('navbar', function() {
    return {
        templateUrl: 'src/components/shared/navbar/navbar.html',
        controller: 'NavbarController'
    };
});