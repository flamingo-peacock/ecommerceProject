(function () {

  angular
    .module('ecommerceApp')
    .service('products', products);

  products.$inject = ['$http'];
  function products ($http) {

  	var getProducts = function () {
  		return $http.get('/api/products')
      .then(function(response) {
        for(obj in response.data){
        response.data[obj].id = response.data[obj]._id;
}
        console.log(response.data[obj].id);

			    return response.data;
			  }, function(error) {
			    console.log(error);
			    return {message: "Unable to fetch data"};
			  });	
  	};
    
    var getSingleProduct = function (id){
    var concatURL = '/api/products/' + id;
    return $http({
      method: 'GET',
      url: concatURL})
      .then(function (response) {
        return response.data;
      }, function (error) {
        console.log(error)
        return {message: "Unable to fetch data"};
      });
    };  

  

  return {
      getProducts: getProducts,
      getSingleProduct: getSingleProduct
    };
  }

})();