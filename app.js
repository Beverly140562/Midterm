
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
                { name: 'Laptop', price: 1500, stock: 5 },
                { name: 'Headphones', price: 100, stock:10 },
                { name: 'Keyboard', price: 50, stock:20 },
            ];
            addToCart(products[index]);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);