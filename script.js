let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle menu saat ikon diklik
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Fungsi untuk mengatur navbar aktif saat scroll
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let navLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
            });
        }
    });

    // Tutup menu jika halaman di-scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Event listener agar navbar bisa ditutup setelah memilih menu
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Tutup navbar saat klik di luar menu
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});
