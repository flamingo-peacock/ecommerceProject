(function () {

  angular.module('ecommerceApp', ['ui.router']);

  function config ($stateProvider, $urlRouterProvider) {

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
      .state('details', {
        url: '/products/:id',
        templateUrl: 'views/product-details.html',
        controller: 'singleProductCtrl',
        controllerAs: 'vm'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: './views/cart.html',
        controller: 'cartCtrl',
        controllerAs: 'vm'
      })
      .state('thanks', {
        url: '/thanks',
        templateUrl: './views/thanks.html',
        controller: 'contactCtrl',
        controllerAs: 'vm'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './views/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
      
  }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$stateChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === 'profile' && !authentication.isLoggedIn()) {
        $location.path('home');
      }
      if ($location.path() === 'cart' && !authentication.isLoggedIn()) {
        $location.path('login');
      }
    });
  }

  angular
    .module('ecommerceApp')
    .config(['$stateProvider', '$urlRouterProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

})();
