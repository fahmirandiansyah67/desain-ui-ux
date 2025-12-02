const rate = 14650;
const rupiah = parseFloat(prompt("Masukkan nilai uang Rupiah anda: "));
const dollar = rupiah / rate;

if (isNaN(rupiah) || rupiah <= 0) {
  alert("Error");
} else {
  const dollar = rupiah / rate;
  alert(
    "Uang rupiah anda dengan sebesar " +
      rupiah +
      "Telah dikonversi menjadi dollar senilai " +
      dollar.toFixed(2)
  );
}
