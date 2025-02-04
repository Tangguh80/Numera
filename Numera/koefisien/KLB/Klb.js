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















/*====================================== Toggle slide bar mobile ====================================*/

function toggleSlideBar() {
    const slideBar = document.querySelector('.slide-bar');
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar2');

    if (slideBar.classList.contains('active')) {
        // Tutup dengan animasi naik ke atas
        slideBar.classList.remove('active');
        slideBar.style.transform = "translateY(-100%)";

        // Setelah animasi selesai, sembunyikan elemen
        setTimeout(() => {
            slideBar.style.display = "none";
        }, 300); // Sesuai dengan durasi transition di CSS (0.3s)
        
        navbar.classList.remove('active');
        menuIcon.setAttribute('name', 'menu');
    } else {
        // Tampilkan slide-bar dan mulai animasi turun
        slideBar.style.display = "block";
        setTimeout(() => {
            slideBar.classList.add('active');
            slideBar.style.transform = "translateY(0)";
        }, 10);

        navbar.classList.add('active');
        menuIcon.setAttribute('name', 'close');
    }
}




/*====================================== toogle dropdown submenu ketika ada yg aktif ====================================*/
function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown-slidebar");
    let submenuContainer = document.querySelector(".submenu-koefisien");
  
    dropdown.classList.toggle("open");
    submenuContainer.classList.toggle("open"); // Toggle class open pada submenu container
  
    // Periksa apakah ada item aktif di dalam submenu
    let activeSubmenuItem = document.querySelector(".submenu2 li.active");
  
    if (activeSubmenuItem) {
      if (!submenuContainer.classList.contains("open")) {
        // Jika submenu tertutup, tambahkan class active-parent setelah delay 0.3 detik
        setTimeout(() => {
          dropdown.classList.add("active-parent");
        }, 400); // Delay 0.3 detik (300 milidetik)
      } else {
        // Jika submenu terbuka, hapus class active-parent
        dropdown.classList.remove("active-parent");
      }
    }
  }
  
  // Pastikan event tidak menutup submenu saat diklik
  document.querySelectorAll(".submenu2 a").forEach(item => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // Mencegah event dari menutup dropdown
    });
  });
  
  // Cek saat halaman dimuat
  document.addEventListener("DOMContentLoaded", () => {
    let dropdown = document.querySelector(".dropdown-slidebar");
    let submenuContainer = document.querySelector(".submenu-koefisien");
    let activeSubmenuItem = document.querySelector(".submenu2 li.active");
  
    // Jika ada item aktif dan submenu tertutup, tambahkan class active-parent
    if (activeSubmenuItem && !submenuContainer.classList.contains("open")) {
      dropdown.classList.add("active-parent");
    }
  });










  /*====================================== Navbar scrool efek ====================================*/

    const navbar = document.querySelector('.navbar2');
    const slideBar = document.querySelector('.slide-bar');
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;

        // Cek apakah slide-bar aktif, jika ya maka navbar tidak menghilang
        if (slideBar.classList.contains('active')) {
            return;
        }

        if (scrollTop > lastScrollTop) {
            // Scroll ke bawah → Navbar naik (sembunyi)
            navbar.style.transform = "translateY(-100%)";
        } else {
            // Scroll ke atas → Navbar turun (muncul)
            navbar.style.transform = "translateY(0)";
            navbar.classList.add("with-shadow"); // Tambahkan shadow saat scroll ke atas
        }

        // Jika di posisi paling atas, hilangkan shadow
        if (scrollTop === 0) {
            navbar.classList.remove("with-shadow");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Hindari nilai negatif
    });
