function toggleSubMenu(button) {
    const subMenu = button.nextElementSibling;
    const chevronIcon = button.querySelector('#chevron-icon');

    // Toggle class 'show' untuk submenu
    subMenu.classList.toggle('show');

    // Toggle class 'rotate' pada ikon
    chevronIcon.classList.toggle('rotate');

    // Toggle class 'active' pada tombol dropdown
    button.classList.toggle('active', !subMenu.classList.contains('show'));
}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-btn');
    
    // Toggle the 'close' class to collapse/expand the sidebar
    sidebar.classList.toggle('close');
    
    // Close all submenus when the sidebar collapses
    if (sidebar.classList.contains('close')) {
        const subMenus = document.querySelectorAll('#sidebar .sub-menu.show');
        subMenus.forEach(subMenu => {
            subMenu.classList.remove('show'); // Hide the submenu
        });

        const chevrons = document.querySelectorAll('#sidebar .dropdown-btn .rotate');
        chevrons.forEach(chevron => {
            chevron.classList.remove('rotate'); // Reset the chevron rotation
        });
    }

    // Optional: Rotate the icon on the toggle button
    toggleButton.classList.toggle('rotate');
}


const sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseleave', () => {
    const subMenus = document.querySelectorAll('#sidebar .sub-menu.show');
    const chevrons = document.querySelectorAll('#sidebar .dropdown-btn .rotate');

    subMenus.forEach(subMenu => {
        subMenu.classList.remove('show'); // Tutup semua submenu
    });

    chevrons.forEach(chevron => {
        chevron.classList.remove('rotate'); // Reset rotasi ikon
    });

    // Tambahkan .active setelah animasi selesai (300ms sesuai CSS)
    setTimeout(() => {
        const dropdownButtons = document.querySelectorAll('.dropdown-btn');
        dropdownButtons.forEach(button => {
            if (!button.nextElementSibling.classList.contains('show')) {
                button.classList.add('active'); // Kembalikan tombol dropdown aktif
            }
        });
    }, 300); // 300ms sesuai dengan transition di CSS
});













// Inisialisasi: Periksa apakah ada sub menu aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach(button => {
        const subMenu = button.nextElementSibling;
        const activeSubMenu = subMenu.querySelector('.active');
        if (activeSubMenu) {
            button.classList.add('active');
        }
    });
});