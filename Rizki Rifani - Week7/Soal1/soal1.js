// soal1.js
const readline = require("readline");
const hitung = require("./hitung");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Fungsi menu
function showMenu() {
	console.log("Pilih:");
	console.log("1. Menghitung Luas dan Keliling Persegi");
	console.log("2. Menghitung Luas dan Keliling Persegi Panjang");
	console.log("3. Keluar");

	rl.question("Pilihan Anda: ", (pilih) => {
		switch (pilih) {
			case "1":
				console.log("---------------------------------");
				rl.question("Masukkan panjang sisi persegi: ", (sisi) => {
					const luas = hitung.hitungLuasPersegi(Number(sisi));
					const keliling = hitung.hitungKelilingPersegi(Number(sisi));
					console.log(`Luas persegi: ${luas}`);
					console.log(`Keliling persegi: ${keliling}`);
					console.log(`\n`);
					showMenu();
				});
				break;
			case "2":
				console.log("---------------------------------");
				rl.question("Masukkan panjang: ", (panjang) => {
					rl.question("Masukkan lebar: ", (lebar) => {
						const luas = hitung.hitungLuasPersegiPanjang(Number(panjang), Number(lebar));
						const keliling = hitung.hitungKelilingPersegiPanjang(Number(panjang), Number(lebar));
						console.log(`Luas persegi panjang: ${luas}`);
						console.log(`Keliling persegi panjang: ${keliling}`);
						console.log(`\n`);
						showMenu();
					});
				});
				break;
			case "3":
				rl.close();
				break;
			default:
				console.log("Pilihan tidak valid.");
				showMenu();
				break;
		}
	});
}

showMenu();
