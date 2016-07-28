(function () {

  angular.module('ecommerceApp', ['ui.router']);

  function config ($stateProvider, $locationProvider, $urlRouterProvider) {
    
    //$urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register', 
        templateUrl: './views/register.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: './views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: './views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      })
      .state('products', {
        url: '/products',
        templateUrl: './views/products.html',
        controller: 'productsCtrl',
        controllerAs: 'vm'
      })
      .state('product-details', {
        url: '/products/:id',
        templateUrl: 'views/product-details.html',
        controller: 'productsCtrl',
        controllerAs: 'vm'
      })
      
  }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });
  }

  angular
    .module('ecommerceApp')
    .config(['$stateProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

})();
