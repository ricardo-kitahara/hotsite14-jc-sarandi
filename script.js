const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');

    function toggle() {
        const conteudo = header.nextElementSibling;
        const isAtivo = conteudo.classList.toggle('ativo');
        const icon = header.querySelector('.icon');

        header.setAttribute('aria-expanded', String(isAtivo));
        icon.textContent = isAtivo ? '-' : '+';
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
});

// PWA instalado (standalone) no iOS engole cliques em target="_blank";
// reabrindo explicitamente via window.open dentro do próprio handler do clique.
const emModoStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
if (emModoStandalone) {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
}
