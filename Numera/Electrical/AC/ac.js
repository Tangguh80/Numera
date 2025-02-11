document.addEventListener('DOMContentLoaded', function () {
    // Inisialisasi: Periksa apakah ada sub menu aktif saat halaman dimuat
    const dropdownButtons = document.querySelectorAll('.dropdown-btn1, .dropdown-btn2');
    dropdownButtons.forEach(button => {
        const subMenu = button.nextElementSibling;

        // Cek apakah ada elemen dengan class 'active' di dalam submenu
        if (subMenu && subMenu.querySelector('.active')) {
            // Tambahkan class 'active' ke tombol dropdown yang sesuai
            button.classList.add('active');
        }

        // Tambahkan event listener untuk tombol dropdown
        button.addEventListener('click', () => {
            const menuClass = button.classList.contains('dropdown-btn1') ? 'sub-menu1' : 'sub-menu2';
            toggleSubMenu(button, menuClass);
        });
    });
});

function toggleSubMenu(button, menuClass) {
    const subMenu = button.nextElementSibling;
    const chevronIcon = button.querySelector('#chevron-icon');

    // Tutup submenu lain sebelum membuka yang baru
    document.querySelectorAll(`.${menuClass}.show`).forEach(menu => {
        if (menu !== subMenu) {
            menu.classList.remove('show');
            menu.previousElementSibling.classList.remove('active');
            menu.previousElementSibling.querySelector('#chevron-icon')?.classList.remove('rotate');
        }
    });

    // Toggle class 'show' pada submenu
    subMenu.classList.toggle('show');
    chevronIcon?.classList.toggle('rotate');

    // Jika submenu terbuka, non-aktifkan background li
    if (subMenu.classList.contains('show')) {
        button.classList.remove('active');
    } else {
        // Jika submenu ditutup, aktifkan background li setelah delay 1 detik
        setTimeout(() => {
            if (subMenu.querySelector('.active')) {
                button.classList.add('active');
            }
        }, 1000); // Delay 1 detik
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-btn');

    sidebar.classList.toggle('close');

    if (sidebar.classList.contains('close')) {
        document.querySelectorAll('.sub-menu1.show, .sub-menu2.show').forEach(subMenu => {
            subMenu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-btn1 .rotate, .dropdown-btn2 .rotate').forEach(chevron => {
            chevron.classList.remove('rotate');
        });

        // Aktifkan background li setelah delay 1 detik
        setTimeout(() => {
            document.querySelectorAll('.dropdown-btn1, .dropdown-btn2').forEach(button => {
                const subMenu = button.nextElementSibling;
                if (!subMenu.classList.contains('show') && subMenu.querySelector('.active')) {
                    button.classList.add('active');
                }
            });
        }, 1000); // Delay 1 detik
    }
    toggleButton.classList.toggle('rotate');
}

// Menutup submenu saat kursor meninggalkan sidebar
document.getElementById('sidebar').addEventListener('mouseleave', () => {
    document.querySelectorAll('.sub-menu1.show, .sub-menu2.show').forEach(subMenu => {
        subMenu.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-btn1 .rotate, .dropdown-btn2 .rotate').forEach(chevron => {
        chevron.classList.remove('rotate');
    });

    // Aktifkan background li setelah delay 1 detik
    setTimeout(() => {
        document.querySelectorAll('.dropdown-btn1, .dropdown-btn2').forEach(button => {
            const subMenu = button.nextElementSibling;
            if (!subMenu.classList.contains('show') && subMenu.querySelector('.active')) {
                button.classList.add('active');
            }
        });
    }, 300); // Delay 1 detik
});











// Inisialisasi: Periksa apakah ada sub menu aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn1');
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


function handleResize() {
    const slideBar = document.querySelector('.slide-bar');
    const menuIcon = document.getElementById('menuIcon');

    if (window.innerWidth > 768) {
        slideBar.classList.remove('active');
        slideBar.style.display = "none";
        slideBar.style.transform = "translateY(-100%)";
        
        // Kembalikan ikon menu ke default (menu)
        if (menuIcon) {
            menuIcon.setAttribute('name', 'menu');
        }
    }
}

// Jalankan saat resize terjadi
window.addEventListener('resize', handleResize);





/*====================================== Toggle Slidebar 1 ====================================*/

function toggleDropdown1() {
    let dropdown = document.querySelector(".dropdown-slidebar1");
    let submenuContainer = document.querySelector(".submenu-Electrical1");
  
    dropdown.classList.toggle("open");
    submenuContainer.classList.toggle("open"); // Toggle class open pada submenu container
  
    // Periksa apakah ada item aktif di dalam submenu
    let activeSubmenuItem = document.querySelector(".submenu1 li.active");
  
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
document.querySelectorAll(".submenu1 a").forEach(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation(); // Mencegah event dari menutup dropdown
    });
});
  
// Cek saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    let dropdown = document.querySelector(".dropdown-slidebar1");
    let submenuContainer = document.querySelector(".submenu-Electrical1");
    let activeSubmenuItem = document.querySelector(".submenu1 li.active");
  
    // Jika ada item aktif dan submenu tertutup, tambahkan class active-parent
    if (activeSubmenuItem && !submenuContainer.classList.contains("open")) {
        dropdown.classList.add("active-parent");
    }
});







/*====================================== Toggle Slidebar 2 ====================================*/

function toggleDropdown2() {
    let dropdown = document.querySelector(".dropdown-slidebar2");
    let submenuContainer = document.querySelector(".submenu-koefisien2");
  
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
    let dropdown = document.querySelector(".dropdown-slidebar2");
    let submenuContainer = document.querySelector(".submenu-koefisien2");
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















  /*====================================== Navbar3 menapilkan container ====================================*/

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-button");
    const containers = {
        "Kalkulator": document.querySelector(".container-calculator"),
        "Dasar": document.querySelector(".container-Dasar"),
        "Histori": document.querySelector(".container-Histori"),
    };

    function showContainer(button) {
        // Hapus class aktif dari semua tombol navigasi
        buttons.forEach(btn => btn.classList.remove("active")); 

        // Jika tombol yang diklik bukan "Histori", ubah tombol aktif
        if (!button.classList.contains("history-button")) {
            button.classList.add("active"); 
        } else {
            // Paksa tetap ke Kalkulator jika Histori ditekan
            document.querySelector(".nav-button:first-child").classList.add("active");
        }

        // Sembunyikan semua container
        Object.values(containers).forEach(container => {
            container.style.display = "none"; 
        });

        // Ambil teks tombol
        const containerName = button.innerText.trim(); 
        if (containers[containerName]) {
            containers[containerName].style.display = "block"; 
        }
    }

    // Tambahkan event listener ke setiap tombol navigasi
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            showContainer(this);
        });
    });

    // Tambahkan event listener untuk tombol histori agar tetap menampilkan Kalkulator
    document.querySelector(".history-button").addEventListener("click", function () {
        showContainer(document.querySelector(".nav-button:first-child")); // Paksa tetap Kalkulator
        containers["Histori"].style.display = "block"; // Tampilkan histori
    });

    // Menampilkan container pertama (Kalkulator) secara default saat halaman dimuat
    showContainer(buttons[0]);
});
    
















/*====================================== fungsi Hitung dan menyimpan ke histori-button ====================================*/

const acData = [ 
    { pk: '1/2', btu: 5000, watt: 400 },
    { pk: '3/4', btu: 7000, watt: 600 },
    { pk: '1', btu: 9000, watt: 780 },
    { pk: '1 1/2', btu: 12000, watt: 1155 },
    { pk: '2', btu: 18000, watt: 1810 }
];

function hitung() {
    const luasRuangan = parseFloat(document.getElementById('Luas-Ruangan').value);
    if (isNaN(luasRuangan) || luasRuangan <= 0) {
        alert('Masukkan luas ruangan yang valid.');
        return;
    }

    const btuPerHour = luasRuangan * 600;
    document.getElementById('BTU/h').value = btuPerHour;

    let selectedAC = acData[0];

    if (luasRuangan > 30) {
        selectedAC = acData.find(ac => ac.pk === '2');
    } else {
        for (let i = 0; i < acData.length; i++) {
            if (btuPerHour <= acData[i].btu) {
                selectedAC = acData[i];
                break;
            }
        }
    }

    let jumlahAC = Math.ceil(btuPerHour / selectedAC.btu);
    
    if (btuPerHour < selectedAC.btu * 0.5) {
        let lowerAC = acData.find(ac => ac.btu < selectedAC.btu);
        if (lowerAC) {
            selectedAC = lowerAC;
            jumlahAC = Math.ceil(btuPerHour / selectedAC.btu);
        }
    }

    const pkAC = selectedAC.pk + ' PK';
    const jumlahACText = jumlahAC + ' unit';
    const totalWatt = jumlahAC * selectedAC.watt;
    const totalWattText = totalWatt + ' Watt';
    const arus = (totalWatt / 220).toFixed(2) + ' A';

    document.getElementById('PK-AC').value = pkAC;
    document.getElementById('Jumlah-AC').value = jumlahACText;
    document.getElementById('Jumlah-WATT').value = totalWattText;
    document.getElementById('Arus').value = arus;

    simpanHistori(luasRuangan, btuPerHour, pkAC, jumlahACText, totalWattText, arus);
}

function simpanHistori(luasRuangan, btuPerHour, pkAC, jumlahAC, totalWatt, arus) {
    const historyButton = document.createElement('button');
    historyButton.className = 'history-button';

    // Memastikan tampilan histori dalam urutan vertikal
    const entries = [
        `Luas Ruangan = ${luasRuangan} m²`,
        `BTU/h = ${btuPerHour}`,
        `PK AC = ${pkAC}`,
        `Jumlah AC = ${jumlahAC}`,
        `Jumlah WATT = ${totalWatt}`,
        `Arus = ${arus}`
    ];

    entries.forEach(text => {
        const span = document.createElement('span');
        span.className = 'expression';
        span.textContent = text;
        historyButton.appendChild(span);
    });

    const containerHistori = document.querySelector('.container-Histori');
    containerHistori.insertBefore(historyButton, containerHistori.firstChild);

    historyButton.addEventListener("click", function () {
        document.querySelectorAll(".nav-button").forEach(btn => btn.classList.remove("active"));
        document.querySelector(".nav-button:first-child").classList.add("active");

        document.querySelector(".container-calculator").style.display = "block";
        document.querySelector(".container-Histori").style.display = "none";

        document.getElementById('Luas-Ruangan').value = luasRuangan;
        document.getElementById('BTU/h').value = btuPerHour;
        document.getElementById('PK-AC').value = pkAC;
        document.getElementById('Jumlah-AC').value = jumlahAC;
        document.getElementById('Jumlah-WATT').value = totalWatt;
        document.getElementById('Arus').value = arus;
    });

    // Menampilkan tombol histori
    historyButton.style.display = 'flex';
}



























































