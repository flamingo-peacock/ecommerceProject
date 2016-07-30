(function () {

  angular
    .module('ecommerceApp')
    .controller('productsCtrl', productsCtrl);

  productsCtrl.$inject = ['$location', 'products', 'cart';
  function productsCtrl($location, products) {
    var vm = this;

    vm.products = [];

    products.getProducts()
    .then(function(data) {
        console.log(data);
        vm.products = data;
      }, function(error){
        vm.error = error.message;
      });

    vm.addItem = function(cartId, prodID){
      cart.addItem(cartId, prodID)
      .then(function(response){
        cart.getCart(response.user)
          . then(function(response){
            vm.cart = response;
          });
      });
    };

  }

})();