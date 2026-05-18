const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-list');

// Abre ou fecha o menu ao clicar nos 3 traços
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fecha o menu automaticamente quando o utilizador clica num link (âncora)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
