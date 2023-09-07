const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Fungsi untuk menghitung total dari array
function hitungTotal(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

// Fungsi untuk menghitung rata-rata dari array
function hitungRata(arr) {
	if (arr.length === 0) {
		return 0;
	}
	const total = hitungTotal(arr);
	const rata = total / arr.length;
	return rata.toFixed(2);
}

// Fungsi untuk mencari nilai minimum dalam array
function cariMin(arr) {
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

// Fungsi untuk mencari nilai maksimum dalam array
function cariMax(arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

// Fungsi untuk membandingkan dua nilai dan mengembalikan teks perbandingannya
function bandingkanNilai(nilaigenap, nilaiganjil) {
	if (nilaigenap === nilaiganjil) {
		return "kedua nilai sama besar";
	} else if (nilaigenap > nilaiganjil) {
		return `nilai genap (${nilaigenap}) lebih besar dari nilai ganjil (${nilaiganjil})`;
	} else {
		return `nilai genap (${nilaigenap}) lebih kecil dari nilai ganjil (${nilaiganjil})`;
	}
}

// Fungsi menu pilihan
function mainMenu() {
	console.log("Menu:");
	console.log("1. Hitung Statistik Array Genap");
	console.log("2. Hitung Statistik Array Ganjil");
	console.log("3. Tampilkan Seluruh Hasil Perbandingan");
	console.log("4. Tampilkan Seluruh Hasil Statistik");
	console.log("5. Keluar");
	rl.question("Pilih menu (1/2/3/4/5): ", (pilihan) => {
		switch (pilihan) {
			case "1":
				hitungStatistik(arrayGenap, "genap");
				break;
			case "2":
				hitungStatistik(arrayGanjil, "ganjil");
				break;
			case "3":
				tampilkanSeluruhPerbandingan();
				break;
			case "4":
				tampilkanSeluruhHasil();
				break;
			case "5":
				console.log("Terima kasih! Program selesai.");
				rl.close();
				break;
			default:
				console.log("Pilihan tidak valid. Silakan pilih lagi.");
				mainMenu();
				break;
		}
	});
}

// Fungsi untuk menghitung statistik dari array
function hitungStatistik(arr, jenisArray) {
	const min = cariMin(arr);
	const max = cariMax(arr);
	const total = hitungTotal(arr);
	const rata = hitungRata(arr);

	console.log(`Statistik pada array ${jenisArray}:`);
	console.log(`Min: ${min}`);
	console.log(`Max: ${max}`);
	console.log(`Total: ${total}`);
	console.log(`Rata-rata: ${rata}`);

	mainMenu();
}

// Fungsi untuk menampilkan seluruh hasil perbandingan
function tampilkanSeluruhPerbandingan() {
	console.log("Seluruh Hasil Perbandingan:");
	console.log("Perbandingan Min:");
	console.log(bandingkanNilai(cariMin(arrayGenap), cariMin(arrayGanjil)));
	console.log("Perbandingan Max:");
	console.log(bandingkanNilai(cariMax(arrayGenap), cariMax(arrayGanjil)));
	console.log("Perbandingan Total:");
	console.log(bandingkanNilai(hitungTotal(arrayGenap), hitungTotal(arrayGanjil)));
	console.log("Perbandingan Rata-rata:");
	console.log(
		bandingkanNilai(parseFloat(hitungRata(arrayGenap)), parseFloat(hitungRata(arrayGanjil)))
	);

	mainMenu();
}

// Fungsi untuk menampilkan seluruh hasil statistik
function tampilkanSeluruhHasil() {
	console.log("Seluruh Hasil Statistik:");
	console.log("Array dengan jumlah index 100:", arrayLengkap);
	console.log("Array genap dengan jumlah index 50:", arrayGenap);
	console.log("Array ganjil dengan jumlah index 50:", arrayGanjil);
	console.log(
		`Min, Max, Total, Rata-rata pada array genap: ${cariMin(arrayGenap)}, ${cariMax(
			arrayGenap
		)}, ${hitungTotal(arrayGenap)}, ${hitungRata(arrayGenap)}`
	);
	console.log(
		`Min, Max, Total, Rata-rata pada array ganjil: ${cariMin(arrayGanjil)}, ${cariMax(
			arrayGanjil
		)}, ${hitungTotal(arrayGanjil)}, ${hitungRata(arrayGanjil)}`
	);
	console.log("Perbandingan nilai genap dan ganjil:");
	console.log("Perbandingan Min :", bandingkanNilai(cariMin(arrayGenap), cariMin(arrayGanjil)));
	console.log("Perbandingan Max :", bandingkanNilai(cariMax(arrayGenap), cariMax(arrayGanjil)));
	console.log(
		"Perbandingan Total :",
		bandingkanNilai(hitungTotal(arrayGenap), hitungTotal(arrayGanjil))
	);
	console.log(
		"Perbandingan Rata-Rata :",
		bandingkanNilai(hitungRata(arrayGenap), hitungRata(arrayGanjil))
	);

	mainMenu();
}

// Membuat array dengan 100 nilai acak antara 1 dan 50
const arrayLengkap = [];
for (let i = 0; i < 100; i++) {
	arrayLengkap.push(Math.floor(Math.random() * 50) + 1);
}

// Membuat array untuk nilai genap dan ganjil tanpa menggunakan filter
const arrayGenap = [];
const arrayGanjil = [];
for (let i = 0; i < arrayLengkap.length; i++) {
	if (arrayLengkap[i] % 2 === 0) {
		arrayGenap.push(arrayLengkap[i]);
	} else {
		arrayGanjil.push(arrayLengkap[i]);
	}
}

// Memulai program dengan menampilkan menu utama
console.log("Selamat datang di Program Statistik Array!");
mainMenu();
