(function () {

  angular
    .module('ecommerceApp')
    .service('cart', cart);

  cart.$inject = ['$http'];
  function cart ($http) {

  	var makeCart = function (userId) {
      getCart(userId).then(function(res){
        var hasCart = res;
      })
      if(hasCart){
        return hasCart
      };
      else{
        var user = {user: userId}
        var obj = JSON.stringify(user);
        $http({
          method: 'POST',
          url: '/api/cart',
          data: obj
        }).then(function(response) {

        }, function(error) {
          
          return 'message: "Unable to push data"';
        }); 
      }
    };

    var getCart = function(userId){
      var concatURL = '/api/cart/' + userId;
      $http({
        method: 'GET',
        url: concatURL
      }).then(function(response) {

      }, function(error) {
        console.log('message: "Unable to pull data"')
        return false;
      }); 
    };


  var addItem = function (productId) {
      var user = {productId: productId}
      var obj = JSON.stringify(user);
      $http({
        method: 'PUT',
        url: '/api/cart',
        data: obj
      }).then(function(response) {

      }, function(error) {
        
        return 'message: "Unable to push data"';
      }); 
    };

  return {
      makeCart: makeCart,
      getCart: getCart,
    };
  }

})();