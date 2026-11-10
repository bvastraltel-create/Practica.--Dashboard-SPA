document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) document.body.classList.add('dark-mode');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const openDrawerBtns = [document.getElementById('open-drawer-btn'), document.getElementById('open-drawer-btn-2')];
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const cancelDrawerBtn = document.getElementById('cancel-drawer-btn');

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

    openDrawerBtns.forEach(btn => btn?.addEventListener('click', openDrawer));
    closeDrawerBtn?.addEventListener('click', closeDrawer);
    cancelDrawerBtn?.addEventListener('click', closeDrawer);
    drawerOverlay?.addEventListener('click', closeDrawer);

    // 4. Gestión de Modal (Acciones Destructivas)
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalInstanceName = document.getElementById('modal-instance-name');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');

    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const instance = e.target.getAttribute('data-instance');
            modalInstanceName.textContent = instance;
            modal.classList.add('open');
            modalOverlay.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    const closeModal = () => {
        modal.classList.remove('open');
        modalOverlay.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    };

    closeModalBtn?.addEventListener('click', closeModal);
    modalCancelBtn?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDrawer();
        }
    });

    const handleAsyncAction = (btnElement, callback) => {
        const textSpan = btnElement.querySelector('.btn-text');
        const spinner = btnElement.querySelector('.spinner');

        btnElement.disabled = true;
        textSpan.classList.add('hidden');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            btnElement.disabled = false;
            textSpan.classList.remove('hidden');
            spinner.classList.add('hidden');
            callback();
        }, 2000);
    };

    document.getElementById('config-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('save-config-btn');
        handleAsyncAction(submitBtn, () => {
            alert('Configuración guardada exitosamente.');
            closeDrawer();
        });
    });

    modalConfirmBtn?.addEventListener('click', () => {
        handleAsyncAction(modalConfirmBtn, () => {
            alert('Instancia reiniciada correctamente.');
            closeModal();
        });
    });
});