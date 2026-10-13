console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favoritku: " + hewan);

let favorit = prompt("Apa hewan favoritmu?");
if (favorit) {
    alert("Hewan favoritmu: " + favorit + "!");
}

// Pengaman: jangan error kalau elemen tidak ada
const judul = document.querySelector("#judul h1");
if (judul) {
    console.log(judul.textContent);
    judul.textContent = "Mengenal Hewan Nusantara";
}

// BLOK 2 : BACA SELENGKAPNYA
const tombolBaca = document.querySelector(".btn-baca");
const teksLengkap = document.querySelector(".selengkapnya");

function bukaTutup() {
    teksLengkap.classList.toggle("sembunyi");
    tombolBaca.textContent = teksLengkap.classList.contains("sembunyi")
        ? "Baca selengkapnya"
        : "Tutup";
}

if (tombolBaca && teksLengkap) {
    tombolBaca.addEventListener("click", bukaTutup);
}

// BLOK 3: MODE GELAP
const tombolGelap = document.querySelector("#tombol-gelap");

function gantiMode() {
    document.body.classList.toggle("gelap");
    tombolGelap.textContent = document.body.classList.contains("gelap")
        ? "Mode Terang"
        : "Mode Gelap";
}

if (tombolGelap) {
    tombolGelap.addEventListener("click", gantiMode);
}

// ARRAY & PERULANGAN
const daftar = ["Elang", "Kura-kura", "Kucing"];
daftar.forEach(function (h) {
    console.log("Halo " + h);
});

// BAGIAN TOMBOL SUKA (UNTUK SEMUA KARTU)
const semuaKartu = document.querySelectorAll(".kartu");
console.log("Jumlah kartu ditemukan:", semuaKartu.length); // untuk cek di console

semuaKartu.forEach(function (kartu) {
    const tombolSuka = kartu.querySelector(".btn-suka");
    const teksSuka = kartu.querySelector(".jumlah-suka");

    if (tombolSuka && teksSuka) {
        let jumlahSuka = parseInt(teksSuka.textContent, 10) || 0;

        tombolSuka.addEventListener("click", function () {
            jumlahSuka++;
            teksSuka.textContent = jumlahSuka;
        });
    }
});

// const judul =
// document.getElementById('judul');
// judul.style.backgroundColor = 'teal';
// const judul = document.getElementById('judul');
// judul.style.backgroundColor = 'teal';

// const kartu =
// document.getElementsByTagName('article');
// for (let i = 0; i < kartu.length; i++) {
//     kartu[i].style.border = '3px solid teal';
// }

// const baca =
// document.getElementsByClassName('btn-baca');
// baca[0].style.backgroundColor = 'orange';

// const judulKartu =  
// document.getElementById('jenis')
//     .getElementsByTagName('h3') [0];
// judulKartu.style.color = 'crimson';

// document.querySelector('#judul h1');
// document.querySelector('.btn-suka');
// document.querySelector('#jenis article p');

// const suka =
// document.querySelectorAll('.btn-suka');
// suka.forEach (t => {
//     t.style.backgroundColor = 'crimson';
// });