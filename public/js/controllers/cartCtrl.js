(function () {

  angular
    .module('ecommerceApp')
    .controller('cartCtrl', cartCtrl);

  cartCtrl.$inject = ['$location', 'cart', 'authentication', '$stateParams'];
  function cartCtrl($location, cart, authentication, $stateParams) { //begin main function
    var vm = this;

  cart.makeCart(authentication.currentUser().id)
  .then(function(response){
    vm.cart = response;
    console.log(vm.cart)
  });

    

    vm.removeItem = function(cartId, prodID){
      cart.removeItem(cartId, prodID)
      .then(function(response){
        cart.getCart(response.user)
          . then(function(response){
            vm.cart = response;
          });
      });
    };  

  }//end main function
})();