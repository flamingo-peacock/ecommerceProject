(function () {

  angular
    .module('ecommerceApp')
    .controller('cartCtrl', cartCtrl);

  cartCtrl.$inject = ['$location', 'cart', 'authentication', '$stateParams'];
  function cartCtrl($location, cart, authentication, $stateParams) {
    var vm = this;

    vm.cart = cart.makeCart(authentication.currentUser().id);

    vm.removeItem = function(cartId, prodID){
      cart.removeItem(cartId, prodID);
      vm.cart = cart.getCart(authentication.currentUser().id);
    };
  }
})();