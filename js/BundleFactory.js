/**
 * @Storage {StorageManager}
 */
function BundleFactory(Storage){
	this.storage = Storage;
}

//TODO: discount
/*
	Spec :
		name: String - Bundle name
		products: [] - Objects:
						-name
						-quantity
		quantity: number - Bundle quantity
		
 */
BundleFactory.prototype.bundle = function(spec){
	var newBundle;
	var productsToBundle = [];
	var bundleQuantity = spec.quantity;
	
	//Move all products from storage to Bundle
	spec.products.forEach(function(val,index){
		var handleCurrProduct = this.storage.popQuantityProduct(val.name,val.quantity);
		
		productsToBundle.push(handleCurrProduct);
	}, this);

	newBundle = new Bundle(spec.name, productsToBundle, bundleQuantity);

	//Insert Bundle back to storage
	this.storage.registerProduct(newBundle);
}
/*
bundle({
	name: 'milk_meat',
	products:[{
		name: 'milk',
		quantity: 3,
	},{
		name: 'meat',
		quantity: 1
	}],
	quantity: 2
});
*/