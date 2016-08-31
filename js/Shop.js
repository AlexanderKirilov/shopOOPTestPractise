var Shop = (function(){
	var products = {};

	return{
		init: function(){
		},

		addProduct: function(spec){
			if(products[spec.name]){
				products[spec.name].quantity += spec.quantity;
			}else{
				products[spec.name] = new Product(spec);
			}
		},

		listProducts: function(){
			console.log(products);
		},
	}
})();