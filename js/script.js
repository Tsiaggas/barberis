function toggleDropdown() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show-dropdown');
}

window.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('.article');
    article.style.display = 'block';
});
window.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('.article');
    article.classList.add('show');
});
