"use strict";
const pekerja = document.getElementById("pekerja");
const jamKerja = document.getElementById("jamKerja");
const upahJam = document.getElementById("upahJam");
const btnSimpan = document.getElementById("btnSimpan");
const hasil = document.getElementById("hasil");
// Membuat array
let daftarPekerja = [];
let daftarJam = [];
let daftarUpahJam = [];
let daftarUpah = [];
// Function menghitung upah satu pekerja
function hitungUpah(jam, upah) {
    return jam * upah;
}
// Function menghitung total seluruh upah
function hitungTotalUpah() {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}
// Function menampilkan data
function tampilkanData() {
    hasil.innerHTML = "";
    for (let i = 0; i < daftarPekerja.length; i++) {
        hasil.innerHTML +=
            "Nama Pekerja: " + daftarPekerja[i] + "<br>" +
                "Jam Kerja: " + daftarJam[i] + "<br>" +
                "Upah per Jam: " + daftarUpahJam[i] + "<br>" +
                "Total Upah: " + daftarUpah[i] + "<br><br>";
    }
    hasil.innerHTML +=
        "<strong>Total Pengeluaran Upah: Rp" +
            hitungTotalUpah() +
            "</strong>";
}
// Function mengosongkan input
function resetInput() {
    pekerja.value = "";
    jamKerja.value = "";
    upahJam.value = "";
}
// Function menyimpan data
function simpanData() {
    daftarPekerja.push(pekerja.value);
    daftarJam.push(Number(jamKerja.value));
    daftarUpahJam.push(Number(upahJam.value));
    const indeks = daftarPekerja.length - 1;
    const total = hitungUpah(daftarJam[indeks], daftarUpahJam[indeks]);
    daftarUpah.push(total);
    tampilkanData();
    resetInput();
}
// Event tombol simpan
btnSimpan.addEventListener("click", simpanData);
