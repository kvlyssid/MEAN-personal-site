(function () {
    angular
        .module('personal-portal')
        .config(configRoute);

    configRoute.$inject = ['$routeProvider'];

    function configRoute($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/pp-home.html',
            controller: 'homePageController',
            controllerAs: 'homeCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    };
})();