(function () {

  angular
    .module('ecommerceApp')
    .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$location', 'products', '$stateParams'];
  function contactCtrl($location, products, $stateParams) {
    var vm = this;

    vm.contact = {};

    // products.getcontact($stateParams.id).then(function (response) {
    //   vm.contact = response;
    //   return (vm.products);
    // }, function (error) {
    //   vm.error = error.message;
    // });

    vm.addToCart = function(id){
      
    };
  }

})();