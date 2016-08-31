function Bundle(name, arrProducts, quantity){
	Product.call(this,{
		name: name,
		quantity: quantity
	});

	this.products  = [];
}