import { initThemeToggle } from './components/theme.js';
import { initDrawer } from './components/drawer.js';
import { initModal } from './components/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes
    initThemeToggle();
    initDrawer();
    initModal();

    // Responsive Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});