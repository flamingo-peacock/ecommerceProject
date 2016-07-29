(function () {

  angular
    .module('ecommerceApp')
    .controller('singleProductCtrl', singleProductCtrl);

  singleProductCtrl.$inject = ['$location', 'products', '$stateParams'];
  function singleProductCtrl($location, products, $stateParams) {
    var vm = this;

    vm.singleProduct = {};

    products.getSingleProduct($stateParams.id).then(function (response) {
      vm.singleProduct = response;
      return (vm.products);
    }, function (error) {
      vm.error = error.message;
    });
  }

})();