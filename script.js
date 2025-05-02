document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-card button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('محصول به سبد خرید اضافه شد!');
        });
    });
});
