(function () {

  angular
    .module('ecommerceApp')
    .controller('cartCtrl', cartCtrl);

  cartCtrl.$inject = ['$location', 'products', '$stateParams'];
  function cartCtrl($location, products, $stateParams) {
    var vm = this;

    vm.cart = {};

    products.getcart($stateParams.id).then(function (response) {
      vm.cart = response;
      return (vm.cart);
    }, function (error) {
      vm.error = error.message;
    });

    vm.addToCart = function(id){
      
    };
  }

})();