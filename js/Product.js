function Product(spec){
	this.name = spec && spec.name;
	this.price = spec && spec.price || false;
	this.quantity = spec && spec.quantity;
}
