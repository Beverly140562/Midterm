
let cart = [];


function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart!`);
    console.log(cart);
}


function init() {
 
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const products = [
                { name: 'Samsung', price: 30, stock: 10 },
                { name: 'Iphone', price: 50, stock:12 },
                { name: 'Infinix', price: 10, stock:20 },
            ];
            addToCart(products[index]);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);