(function () {

  angular
    .module('ecommerceApp')
    .controller('productsCtrl', productsCtrl);

  productsCtrl.$inject = ['$location', 'products'];
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

  }

})();