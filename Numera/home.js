function toggleSubMenu(button) {
    // Toggle the 'show' class to reveal or hide the submenu
    button.nextElementSibling.classList.toggle('show');

    // Select the chevron icon inside the button and toggle the 'rotate' class
    const chevronIcon = button.querySelector('#chevron-icon');
    chevronIcon.classList.toggle('rotate');
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

// Close all submenus when not hovered
sidebar.addEventListener('mouseleave', () => {
    const subMenus = document.querySelectorAll('#sidebar .sub-menu.show');
    subMenus.forEach(subMenu => {
        subMenu.classList.remove('show'); // Hide the submenu
    });

    const chevrons = document.querySelectorAll('#sidebar .dropdown-btn .rotate');
    chevrons.forEach(chevron => {
        chevron.classList.remove('rotate'); // Reset the chevron rotation
    });
});









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





function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown-slidebar");
    let submenuContainer = document.querySelector(".submenu-koefisien");
  
    dropdown.classList.toggle("open");
    submenuContainer.classList.toggle("open"); // Toggle class open pada submenu container
  }
  
  // Pastikan event tidak menutup submenu saat diklik
  document.querySelectorAll(".submenu2 a").forEach(item => {
    item.addEventListener("click", (event) => {
      event.stopPropagation(); // Mencegah event dari menutup dropdown
    });
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








document.addEventListener("DOMContentLoaded", function () {
    const languageButtons = document.querySelectorAll(".language-toggle button");

    // Objek teks dalam dua bahasa
    const translations = {
        "ID": {
            "welcome": "Selamat Datang di Numera",
            "experience": "Temukan pengalaman menghitung koefisien bangunan",
            "kdh": "perbandingan persentase antara luas ruang terbuka hijau dengan luas tanah perencanaan.",
            "kdb": "perbandingan antara luas lantai dasar bangunan dengan luas lahan perencanaan.",
            "klb": "Perbandingan antara luas total lantai bangunan dengan luas lahan yang digunakan dalam perencanaan.",
            "home": "Beranda",
            "coefficient": "Koefisien",
            "profile": "KLB"
        },
        "EN": {
            "welcome": "Welcome to Numera",
            "experience": "Discover the experience of calculating building coefficients",
            "kdh": "The percentage comparison between green open space and the planned land area.",
            "kdb": "The ratio between the ground floor area of the building and the planned land area.",
            "klb": "The ratio between the total floor area of the building and the land used in planning.",
            "home": "Home",
            "coefficient": "Coefficient",
            "profile": "KLB"
        }
    };

    function setLanguage(lang) {
        // Ubah teks di halaman berdasarkan bahasa yang dipilih
        document.querySelector("h1").textContent = translations[lang]["welcome"];
        document.querySelector("h2").textContent = translations[lang]["experience"];
        document.querySelector(".container2 a:nth-child(1) p").textContent = translations[lang]["kdh"];
        document.querySelector(".container2 a:nth-child(2) p").textContent = translations[lang]["kdb"];
        document.querySelector(".container2 a:nth-child(3) p").textContent = translations[lang]["klb"];

        // Ubah teks navbar
        document.querySelector(".slide-bar ul li a").textContent = translations[lang]["home"];
        document.querySelector(".dropdown-slidebar a").textContent = translations[lang]["coefficient"];
        document.querySelector(".slide-bar ul li:last-child a").textContent = translations[lang]["profile"];

        // Update tombol bahasa yang aktif
        languageButtons.forEach(button => {
            button.classList.remove("active");
            if (button.textContent === lang) {
                button.classList.add("active");
            }
        });

        // Simpan bahasa yang dipilih di localStorage agar tetap tersimpan
        localStorage.setItem("selectedLanguage", lang);
    }

    // Event listener untuk tombol bahasa
    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            setLanguage(this.textContent);
        });
    });

    // Cek bahasa terakhir yang dipilih
    const savedLanguage = localStorage.getItem("selectedLanguage") || "ID";
    setLanguage(savedLanguage);
});
