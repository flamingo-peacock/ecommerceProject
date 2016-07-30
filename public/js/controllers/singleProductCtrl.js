(function () {

  angular
    .module('ecommerceApp')
    .controller('singleProductCtrl', singleProductCtrl);

  singleProductCtrl.$inject = ['$location', 'products', 'cart', '$stateParams'];
  function singleProductCtrl($location, products, cart, $stateParams) {
    var vm = this;

    vm.singleProduct = {};

    products.getSingleProduct($stateParams.id).then(function (response) {
      vm.singleProduct = response;
      return (vm.products);
    }, function (error) {
      vm.error = error.message;
    });

    vm.addItem = function(prodID){
      cart.addItem(cart.id, prodID)
      .then(function(response){
        cart.getCart(response.user)
          . then(function(response){
            vm.cart = response;
          });
      });
    };
  }

})();