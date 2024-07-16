const angka1 = document.querySelector("#angka1");
const angka2 = document.querySelector("#angka2");
const angka3 = document.querySelector("#angka3");
const angka4 = document.querySelector("#angka4");

const hasil = document.querySelector("#hasil");
const hasil_pengurangan = document.querySelector("#hasil_pengurangan");

function tambah(angka1, angka2) {
  let angka_hasil = Number(angka1.value) + Number(angka2.value);
  hasil.innerHTML = angka_hasil;  
}

const kurang = (angka3, angka4) => {
  let angka_hasil = Number(angka3.value) - Number(angka4.value);
  hasil_pengurangan.innerHTML = angka_hasil;
}

const kurang_v2 = (angka3, angka4) => Number(angka3.value) - Number(angka4.value);

const myAlert = () => alert(">> TEST ALERT DARI TOMBOL");
const myAlert2 = (el) => alert(el.value);