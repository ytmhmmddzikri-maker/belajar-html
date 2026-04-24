let judul = document.getElementById("judul");
let tombol = document.getElementById("tombolSapa");
let umur = 17;

if (umur >= 18) {
    console.log("Boleh masuk");
} else {
    console.log("Belum cukup umur");
}

let sudahDiklik = false;

tombol.addEventListener("click", function() {
    if (sudahDiklik === false) {
        judul.textContent = "Halo Balik! 👋";
        judul.style.color = "blue";
        tombol.textContent = "Kembalikan";
        sudahDiklik = true;

    } else {
        judul.textContent = "Halo! Nama saya Muhammad Dzikri Amrullah";
        judul.style.color = "";
        tombol.textContent = "Sapa Saya";
        sudahDiklik = false;
    }
});
