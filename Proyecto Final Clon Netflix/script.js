const nav = document.getElementById('barraSuperior');
window.addEventListener('scroll', () => {
if (window.scrollY >= 100) {
    nav.classList.add('navNegro');
} 
else {
    nav.classList.remove('navNegro');
}
});