
function addToCart(name) {
    alert(name + " " + "has been added to your cart!");

  addToCart.forEach(() => {
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
