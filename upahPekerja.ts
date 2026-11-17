
const pekerja = document.getElementById("pekerja") as HTMLInputElement;
const jamKerja = document.getElementById("jamKerja") as HTMLInputElement;
const upahJam = document.getElementById("upahJam") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const hasil = document.getElementById("hasil") as HTMLElement;

let daftarPekerja: string[] = [];
let daftarJam: number[] = [];
let daftarUpahJam: number[] = [];
let daftarUpah: number[] = [];

// Function menghitung upah satu pekerja
function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}

// Function menghitung total seluruh upah
function hitungTotalUpah(): number {
    let total: number = 0;

    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}

function tampilkanData(): void {
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

function resetInput(): void {
    pekerja.value = "";
    jamKerja.value = "";
    upahJam.value = "";
}

function simpanData(): void {
    daftarPekerja.push(pekerja.value);
    daftarJam.push(Number(jamKerja.value));
    daftarUpahJam.push(Number(upahJam.value));

    const indeks: number = daftarPekerja.length - 1;

    const total: number = hitungUpah(
        daftarJam[indeks],
        daftarUpahJam[indeks]
    );

    daftarUpah.push(total);

    tampilkanData();
    resetInput();
}

btnSimpan.addEventListener("click", simpanData);
