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















  /*====================================== Navbar3 menapilkan container ====================================*/

    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".nav-button");
        const containers = {
            "Kalkulator": document.querySelector(".container-calculator"),
            "Dasar": document.querySelector(".container-Dasar"),
            "Histori": document.querySelector(".container-Histori"),
        };
    
        // Fungsi untuk menampilkan container yang sesuai dan menyembunyikan yang lain
        function showContainer(button) {
            buttons.forEach(btn => btn.classList.remove("active")); // Hapus class aktif dari semua tombol
            button.classList.add("active"); // Tambahkan class aktif pada tombol yang diklik
    
            Object.values(containers).forEach(container => {
                container.style.display = "none"; // Sembunyikan semua container
            });
    
            const containerName = button.innerText.trim(); // Ambil teks tombol
            if (containers[containerName]) {
                containers[containerName].style.display = "block"; // Tampilkan container yang sesuai
            }
        }
    
        // Tambahkan event listener ke setiap tombol navigasi
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                showContainer(this);
            });
        });
    
        // Menampilkan container pertama secara default saat halaman dimuat
        showContainer(buttons[0]);
    });
    




















/*====================================== Fungsi Calculator ====================================*/

document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua input dengan class "input-field"
    const inputFields = document.querySelectorAll(".input-field");

    inputFields.forEach(input => {
        input.addEventListener("input", function () {
            // Hapus karakter selain angka dan titik desimal
            this.value = this.value.replace(/[^0-9.]/g, '');
        });
    });
});

function hitung() {
    // Ambil nilai input
    let luasLantaiInput = document.getElementById("luas-lantai");
    let luasTanahInput = document.getElementById("luas-tanah");
    let hasilInput = document.getElementById("hasil");

    let luasLantai = luasLantaiInput.value.trim();
    let luasTanah = luasTanahInput.value.trim();

    // Jika salah satu input kosong, tampilkan pesan "Isi Nilai"
    if (luasLantai === "" || luasTanah === "") {
        hasilInput.value = "Isi Nilai";
        return;
    }

    // Konversi ke angka
    luasLantai = parseFloat(luasLantai) || 0;
    luasTanah = parseFloat(luasTanah) || 0;

    // Pastikan luas tanah tidak nol
    if (luasTanah === 0) {
        hasilInput.value = "Luas tanah tidak boleh 0";
        return;
    }

    // Hitung hasil
    let hasil = luasLantai / luasTanah;

    // Tampilkan hasil dengan 4 angka di belakang koma
    hasilInput.value = hasil.toFixed(4);
}






































/*====================================== fungsi menyimpan ke histori-button ====================================*/
/*====================================== Fungsi menyimpan ke histori-button ====================================*/
function hitung() {
    // Ambil nilai dari input
    const luasLantai = parseFloat(document.getElementById('luas-lantai').value);
    const luasTanah = parseFloat(document.getElementById('luas-tanah').value);

    // Validasi input
    if (isNaN(luasLantai) || isNaN(luasTanah) || luasTanah === 0) {
        alert("Masukkan nilai yang valid!");
        return;
    }

    // Hitung hasil
    const hasil = luasLantai / luasTanah;

    // Tampilkan hasil di input hasil
    document.getElementById('hasil').value = hasil.toFixed(2);

    // Buat tombol histori baru
    const historyButton = document.createElement('button');
    historyButton.className = 'history-button';

    // Buat elemen span untuk ekspresi dan hasil
    const expressionSpan = document.createElement('span');
    expressionSpan.className = 'expression';
    expressionSpan.textContent = `${luasLantai} ÷ ${luasTanah} =`;

    const resultSpan = document.createElement('span');
    resultSpan.className = 'result';
    resultSpan.textContent = hasil.toFixed(2);

    // Tambahkan elemen span ke dalam tombol histori
    historyButton.appendChild(expressionSpan);
    historyButton.appendChild(resultSpan);

    // Ambil container histori
    const containerHistori = document.querySelector('.container-Histori');

    // Tambahkan tombol histori baru ke paling atas container histori
    containerHistori.insertBefore(historyButton, containerHistori.firstChild);

    // Tambahkan event listener untuk memuat data ke kalkulator saat histori ditekan
    historyButton.addEventListener("click", function () {
        // Alihkan navigasi ke Kalkulator
        document.querySelectorAll(".nav-button").forEach(btn => btn.classList.remove("active3"));
        document.querySelector(".nav-button:first-child").classList.add("active3");

        // Tampilkan container kalkulator
        document.querySelector(".container-calculator").style.display = "block";
        document.querySelector(".container-Histori").style.display = "none";

        // Masukkan nilai histori ke input kalkulator
        document.getElementById('luas-lantai').value = luasLantai;
        document.getElementById('luas-tanah').value = luasTanah;
        document.getElementById('hasil').value = hasil.toFixed(2);
    });

    // Tampilkan tombol histori
    historyButton.style.display = 'flex';
}
