// Mengambil nilai dari form
const angka_1 = document.getElementById("number1");
const angka_2 = document.getElementById("number2");
const hasil = document.getElementById("hasil");
const submit = document.getElementById("submit");

// Ketika user klik submit, maka hasil muncul
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const num1 = Number(angka_1.value);
  const num2 = Number(angka_2.value);

  hasil_operasi = num1 + num2;
  hasil.value = hasil_operasi;
});
