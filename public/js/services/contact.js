(function () {

  angular
    .module('ecommerceApp')
    .service('contact', contact);

  contact.$inject = ['$http'];
  function contact ($http) {

  	var sendContact = function (bodyObject) {
      var obj = JSON.stringify(bodyObject);
      $http({
        method: 'POST',
        url: '/api/contact',
        data: obj
      }).then(function(response) {

      }, function(error) {
        
        return 'message: "Unable to push data"';
      }); 
    };
  

  return {
      sendContact: sendContact
    };
  }

})();