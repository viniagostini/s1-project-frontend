angular.module('addExtreme').config(function(stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    stateHelperProvider

        .state({
            name: 'login',
            url: '/login',
            templateUrl: 'src/components/login/login.html',
            controller: 'LoginController'
        })

        .state({
            name: 'signup',
            url: '/signup',
            templateUrl: 'src/components/signup/signup.html',
            controller: 'SignupController'
        })

        .state({
            name: 'home',
            url: '/home',
            templateUrl: 'src/components/home/home.html',
            controller: 'HomeController',
            children: [
                {
                    name: 'user-info',
                    url: '/user-info',
                    templateUrl: 'src/components/userInfo/user.info.html',
                    controller: 'UserInfoController'
                },
                {
                    name: 'my-ads',
                    url: '/my-ads',
                    templateUrl: 'src/components/my-ads/my-ads.html',
                    controller: 'MyAdsController'
                },
                {
                    name: 'explore',
                    url: '/explore',
                    templateUrl: 'src/components/explore/explore.html',
                    controller: 'ExploreController'
                }
            ]
        })



    });
