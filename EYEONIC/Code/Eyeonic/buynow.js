let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}



// add to cart
$(document).ready(function () {
    let quantity = 1;

    $('.increase').on('click', function () {
        quantity++;
        updateQuantity();
    });

    $('.decrease').on('click', function () {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        }
    });

    $('.add-to-cart').on('click', function () {
        alert(`Added ${quantity} product(s) to cart!`);
    });

    function updateQuantity() {
        $('.quantity').text(quantity);
    }
});