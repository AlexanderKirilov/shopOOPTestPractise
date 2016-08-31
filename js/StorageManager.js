function StorageManager(){
	this.products = {};
}
/*
	spec:
		-name
		-quantity

		optional:
		-price
 */
StorageManager.prototype.addProduct = function(spec){
	if(this.products[spec.name]){
		this.products[spec.name].quantity += spec.quantity;
	}else{
		this.products[spec.name] = new Product(spec);
	}
}
StorageManager.prototype.popQuantityProduct = function(name, quantity){
	var getProduct = this.products[name];
	if(getProduct){
		getProduct.quantity -= quantity;

		return new Product({
			name: name,
			price: getProduct.price
			quantity: quantity
		});		
	}
}
