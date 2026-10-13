console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favoritku: "+ hewan);

let favorit = prompt("Apa hewan favoritmu?");
alert("Hewan favoritmu:" + favorit + "!");
 
const judul = document.querySelector("#judul h1")
console.log(judul.textContent);
judul.textContent = "Mengenal Hewan yang Unik";

// =========================
// BLOK 1: TOMBOL SUKA
// =========================

let jumlahSuka = 0;
const tombolSuka = document.querySelector(".btn-suka");
const teksSuka = document.querySelector(".jumlah-suka");
 
function tambahSuka() {
  jumlahSuka = jumlahSuka + 1;
  teksSuka.textContent = jumlahSuka;
}
 
tombolSuka.addEventListener("click", tambahSuka);

function tambahSuka() {
    jumlahSuka = jumlahSuka + 1;
    teksSuka.textContent = jumlahSuka;
}
tombolSuka.addEventListener("click", tambahSuka)



// =========================
// BLOK 2: BACA SELENGKAPNYA
// =========================

const tombolBaca = document.querySelector(".btn-baca"); 
const teksLengkap = document.querySelector(".selengkapnya"); 

function bukaTutup() { 
    teksLengkap.classList.toggle("sembunyi") 
    if (teksLengkap.classList.contains("sembunyi")) { 
        tombolBaca.textContent = "Baca selengkapnya"; 
    } else { 
        tombolBaca.textContent = "Tutup"; 
    } 
} 

tombolBaca.addEventListener("click", bukaTutup);

//===Bagian C: Tombol Suka (BLOK 1, versi 1 kartu)===
// let jumlahSuka = 0;
// const tombolSuka = document.querySelector(".btn-suka");
// const teksSuka = document.querySelector(".jumlah-suka");
//
// function tambahSuka() {
//   jumlahSuka = jumlahSuka + 1;
//   teksSuka.textContent = jumlahSuka;
// }
//
// tombolSuka.addEventListener("click", tambahSuka);

//===Bagian D: Baca Selengkapnya (BLOK 2, versi 1 kartu)===
// const tombolBaca = document.querySelector(".btn-baca");
// const teksLengkap = document.querySelector(".selengkapnya");
//
// function bukaTutup() {
//   teksLengkap.classList.toggle("sembunyi");
//
//   if (teksLengkap.classList.contains("sembunyi")) {
//     tombolBaca.textContent = "Baca selengkapnya";
//   } else {
//     tombolBaca.textContent = "Tutup";
//   }
// }
//
// tombolBaca.addEventListener("click", bukaTutup);

//===Bagian D: Mode Gelap (BLOK 3)===
/// BLOK 3: MODE GELAP

document.addEventListener("DOMContentLoaded", function () {

    const tombolGelap = document.getElementById("tombol-gelap");

    if (!tombolGelap) {
        console.error("Tombol dengan id 'tombol-gelap' tidak ditemukan.");
        return;
    }

    tombolGelap.addEventListener("click", function () {

        // Aktif/nonaktif mode gelap
        document.body.classList.toggle("dark");

        // Ubah tulisan tombol
        if (document.body.classList.contains("dark")) {
            tombolGelap.textContent = "Mode Terang";
        } else {
            tombolGelap.textContent = "Mode Gelap";
        }

    });

});
const daftar = ["Elang", "Kura-kura", "Kucing"];
daftar[0]
daftar.length
daftar.forEach(function (h) { console.log("Halo, " + h); });

const semuaKartu = document.querySelectorAll(".kartu");

semuaKartu.forEach(function (kartu){
    let jumlahSuka = 0;
    const tombolSuka = kartu.querySelector(".btn-suka");
    const teksSuka = kartu.querySelector(".jumblah-suka");

    tombolSuka.addEventListener("click", function () {
        jumlahSuka = jumlahSuka + 1;
        teksSuka.textContent = jumlahSuka;
    })
})
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