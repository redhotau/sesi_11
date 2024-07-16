function tambah() {
    const angka1 = document.querySelector("#angka1");
    const angka2 = document.querySelector("#angka2");
    const hasil = document.querySelector("#hasil_penjumlahan");

    let angka_hasil = Number(angka1.value) + Number(angka2.value);
    hasil.innerHTML = angka_hasil;  
}

    const kurang =()