export function initDrawer() {
    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const openBtns = document.querySelectorAll('[id^="open-drawer-btn"]');
    const closeBtn = document.getElementById('close-drawer-btn');
    const cancelBtn = document.getElementById('cancel-drawer-btn');
    const form = document.getElementById('config-form');

    if (!drawer || !drawerOverlay) return;

    const openDrawer = () => {
        drawer.classList.add('open');
        drawerOverlay.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
    };

    openBtns.forEach(btn => btn?.addEventListener('click', openDrawer));
    closeBtn?.addEventListener('click', closeDrawer);
    cancelBtn?.addEventListener('click', closeDrawer);
    drawerOverlay?.addEventListener('click', closeDrawer);

    // Cierre con la tecla ESC (5D Comportamiento)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // Envío del formulario con simulación de estado Loading
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('save-config-btn');
        if (!submitBtn) return;

        const textSpan = submitBtn.querySelector('.btn-text');
        const spinner = submitBtn.querySelector('.spinner');

        submitBtn.disabled = true;
        textSpan?.classList.add('hidden');
        spinner?.classList.remove('hidden');

        setTimeout(() => {
            submitBtn.disabled = false;
            textSpan?.classList.remove('hidden');
            spinner?.classList.add('hidden');
            alert('Configuración guardada exitosamente.');
            closeDrawer();
        }, 1500);
    });
}