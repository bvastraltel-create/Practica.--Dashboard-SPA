export function initModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const instanceNameSpan = document.getElementById('modal-instance-name');
    const closeBtn = document.getElementById('close-modal-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');
    const confirmBtn = document.getElementById('modal-confirm-btn');

    if (!modal || !modalOverlay) return;

    const openModal = (instanceName) => {
        if (instanceNameSpan) instanceNameSpan.textContent = instanceName;
        modal.classList.add('open');
        modalOverlay.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modalOverlay.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    };

    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const instance = e.target.getAttribute('data-instance') || 'instancia seleccionada';
            openModal(instance);
        });
    });

    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    confirmBtn?.addEventListener('click', () => {
        const textSpan = confirmBtn.querySelector('.btn-text');
        const spinner = confirmBtn.querySelector('.spinner');

        confirmBtn.disabled = true;
        textSpan?.classList.add('hidden');
        spinner?.classList.remove('hidden');

        setTimeout(() => {
            confirmBtn.disabled = false;
            textSpan?.classList.remove('hidden');
            spinner?.classList.add('hidden');
            alert('Acción ejecutada correctamente.');
            closeModal();
        }, 2000);
    });
}