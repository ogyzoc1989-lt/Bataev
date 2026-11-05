 
const product = { 
    name: 'Наушники', 
    price: 5000 
};


function showProduct(discount, city) {

    const finalPrice = this.price - (this.price * (discount / 100));
    
    console.log(`Товар: ${this.name}, Цена со скидкой (${discount}%): ${finalPrice} руб., Город: ${city}`);
}

console.log("--- Вызов через call() ---");
showProduct.call(product, 10, 'Москва');


console.log("--- Вызов через apply() ---");
showProduct.apply(product, [10, 'Москва']);