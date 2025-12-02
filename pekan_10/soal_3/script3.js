// Menghitung biaya parkir
// 2 jam pertama = Rp3.000
// Perjam berikutnya Rp.1000

const parkir = 3000;
const jam_masuk = parseFloat(
  prompt("Masukkan jam masuk parkir kendaraan anda: ")
);
const jam_keluar = parseFloat(
  prompt("Masukkan jam keluar parkir kendaraan anda: ")
);

const lama_parkir = jam_keluar - jam_masuk;
// const jam_berikutnya = lama_parkir > 2

if (lama_parkir <= 2) {
  alert("Biaya parkir anda hanya Rp." + parkir);
} else if (lama_parkir > 2) {
  const durasi_berikutnya = lama_parkir + 1;
  alert("Harga parkir anda senilai: Rp." + durasi_berikutnya + "000");
}
