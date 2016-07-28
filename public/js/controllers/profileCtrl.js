(function() {

  angular
    .module('ecommerceApp')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', 'profile'];
  function profileCtrl($location, profile) {
    var vm = this;

    vm.user = {};

    profile.getProfile()
      .success(function(data) {
        console.log(data)
        vm.user = data;
      })
      .error(function(e) {
        console.log(e);
      });
  }

})();
