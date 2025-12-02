const pi = 3.14;
const jari_jari = parseFloat(prompt("Masukkan jari jari: "));

if (isNaN(jari_jari) || jari_jari <= 0) {
  alert("Error");
} else {
  luas_lingkaran = pi * (jari_jari * jari_jari);
  alert("Luas lingkaran adalah: " + luas_lingkaran);
}
