"use strict";
const nama = document.getElementById("nama");
const gajiPokok = document.getElementById("gajiPokok");
const jamLembur = document.getElementById("jamLembur");
const hariAbsen = document.getElementById("hariAbsen");
const btnHitung = document.getElementById("btnHitung");
const hasilGaji = document.getElementById("hasilGaji");
const upahLembur = 25000;
const potongan = 100000;
function hitungGaji() {
    const namaKaryawan = nama.value;
    const gaji = Number(gajiPokok.value);
    const lembur = Number(jamLembur.value);
    const absen = Number(hariAbsen.value);
    if (gaji < 0 || lembur < 0 || absen < 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }
    const gajiBersih = gaji + (lembur * upahLembur) - (absen * potongan);
    let status;
    if (absen == 0) {
        status = "Sangat Disiplin";
    }
    else if (absen <= 2) {
        status = "Disiplin";
    }
    else if (absen <= 4) {
        status = "Cukup Disiplin";
    }
    else if (absen <= 6) {
        status = "Kurang Disiplin";
    }
    else {
        status = "Perlu Pembinaan";
    }
    hasilGaji.innerHTML =
        "Nama: " + namaKaryawan + "<br>" +
            "Gaji bersih: Rp" + gajiBersih + "<br>" +
            "Kedisiplinan: " + status;
}
btnHitung.addEventListener("click", hitungGaji);
