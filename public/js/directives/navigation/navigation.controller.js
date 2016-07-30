(function () {

  angular
    .module('ecommerceApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$state','authentication', 'cart'];
  function navigationCtrl($state, authentication, cart) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    

    vm.logout = function() {
      authentication.logout();
       $state.reload();

    }
  }

})();
