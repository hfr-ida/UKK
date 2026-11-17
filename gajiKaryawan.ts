
const nama = document.getElementById("nama") as HTMLInputElement;
const gajiPokok = document.getElementById("gajiPokok") as HTMLInputElement;
const jamLembur = document.getElementById("jamLembur") as HTMLInputElement;
const hariAbsen = document.getElementById("hariAbsen") as HTMLInputElement;
const btnHitung = document.getElementById("btnHitung") as HTMLButtonElement;
const hasilGaji = document.getElementById("hasilGaji") as HTMLElement;

const upahLembur: number = 25000;
const potongan: number = 100000;

function hitungGaji(): void {
    const namaKaryawan: string = nama.value;
    const gaji: number = Number(gajiPokok.value);
    const lembur: number = Number(jamLembur.value);
    const absen: number = Number(hariAbsen.value);

    if (gaji < 0 || lembur < 0 || absen < 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }

    const gajiBersih: number = gaji + (lembur * upahLembur) - (absen * potongan);

    let status: string;

    if (absen == 0) {
        status = "Sangat Disiplin";
    } else if (absen <= 2) {
        status = "Disiplin";
    } else if (absen <= 4) {
        status = "Cukup Disiplin";
    } else if (absen <= 6) {
        status = "Kurang Disiplin";
    } else {
        status = "Perlu Pembinaan";
    }

    hasilGaji.innerHTML =
        "Nama: " + namaKaryawan + "<br>" +
        "Gaji bersih: Rp" + gajiBersih + "<br>" +
        "Kedisiplinan: " + status;
}

btnHitung.addEventListener("click", hitungGaji);