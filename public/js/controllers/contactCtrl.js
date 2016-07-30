(function () {

  angular
    .module('ecommerceApp')
    .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$location', 'contact'];
  function contactCtrl($location, contact) {
    var vm = this;

    vm.contact = function(obj){
      console.log(obj);
      contact.sendContact(obj);

      $location.path('thanks');
    };
  }



})();