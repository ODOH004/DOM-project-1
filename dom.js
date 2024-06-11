document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total');

    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityElement = item.querySelector('.quantity');
        const itemPriceElement = item.querySelector('.item-price');
        const itemPrice = parseFloat(item.getAttribute('data-price'));

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateItemPrice(itemPriceElement, itemPrice, quantity);
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateItemPrice(itemPriceElement, itemPrice, quantity);
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    function updateItemPrice(element, price, quantity) {
        element.textContent = `$${(price * quantity).toFixed(2)}`;
    }

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            total += quantity * itemPrice;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    updateTotalPrice(); // Initialize the total price
});
