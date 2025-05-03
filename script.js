// در این قسمت می‌توانید عملکردهایی مانند افزودن به سبد خرید را بنویسید.
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('محصول به سبد خرید اضافه شد!');
    });
});
