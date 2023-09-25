const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

class ArrayStatistik {
	constructor(arr) {
		this.arr = arr;
	}

	hitungTotal() {
		let total = 0;
		for (let i = 0; i < this.arr.length; i++) {
			total += this.arr[i];
		}
		return total;
	}

	hitungRata() {
		if (this.arr.length === 0) {
			return 0;
		}
		const total = this.hitungTotal();
		const rata = total / this.arr.length;
		return rata.toFixed(2);
	}

	cariMin() {
		let min = this.arr[0];
		for (let i = 1; i < this.arr.length; i++) {
			if (this.arr[i] < min) {
				min = this.arr[i];
			}
		}
		return min;
	}

	cariMax() {
		let max = this.arr[0];
		for (let i = 1; i < this.arr.length; i++) {
			if (this.arr[i] > max) {
				max = this.arr[i];
			}
		}
		return max;
	}
}

class StatistikProgram {
	constructor() {
		this.arrayLengkap = this.generateRandomArray(100);
		this.arrayGenap = this.filterArrayByParity(this.arrayLengkap, "genap");
		this.arrayGanjil = this.filterArrayByParity(this.arrayLengkap, "ganjil");
	}

	generateRandomArray(length) {
		const randomArray = [];
		for (let i = 0; i < length; i++) {
			randomArray.push(Math.floor(Math.random() * 50) + 1);
		}
		return randomArray;
	}

	filterArrayByParity(arr, type) {
		const filteredArray = [];
		for (let i = 0; i < arr.length; i++) {
			if ((type === "genap" && arr[i] % 2 === 0) || (type === "ganjil" && arr[i] % 2 !== 0)) {
				filteredArray.push(arr[i]);
			}
		}
		return filteredArray;
	}

	hitungStatistik(arr, jenisArray) {
		const arrayStatistik = new ArrayStatistik(arr);
		const min = arrayStatistik.cariMin();
		const max = arrayStatistik.cariMax();
		const total = arrayStatistik.hitungTotal();
		const rata = arrayStatistik.hitungRata();

		console.log(`Array acak ${jenisArray} index 1-50 : \n${arr}`);
		console.log(`Statistik pada array ${jenisArray}:`);
		console.log(`Min: ${min}`);
		console.log(`Max: ${max}`);
		console.log(`Total: ${total}`);
		console.log(`Rata-rata: ${rata}`);
		console.log("------------------------------------------------");

		this.mainMenu();
	}

	tampilkanSeluruhPerbandingan() {
		console.log("Seluruh Hasil Perbandingan:");
		console.log(
			`Perbandingan Min: ${this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "cariMin")}`
		);
		console.log(
			`Perbandingan Max: ${this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "cariMax")}`
		);
		console.log(
			`Perbandingan Total: ${this.bandingkanNilai(
				this.arrayGenap,
				this.arrayGanjil,
				"hitungTotal"
			)}`
		);
		console.log(
			`Perbandingan Rata-Rata: ${this.bandingkanNilai(
				this.arrayGenap,
				this.arrayGanjil,
				"hitungRata"
			)}`
		);

		this.mainMenu();
	}

	bandingkanNilai(arr1, arr2, method) {
		const arrayStatistik1 = new ArrayStatistik(arr1);
		const arrayStatistik2 = new ArrayStatistik(arr2);

		const value1 = arrayStatistik1[method]();
		const value2 = arrayStatistik2[method]();

		if (value1 === value2) {
			return "kedua nilai sama besar";
		} else if (value1 > value2) {
			return `nilai genap lebih besar dari nilai ganjil`;
		} else {
			return `nilai genap lebih kecil dari nilai ganjil`;
		}
	}

	tampilkanSeluruhHasil() {
		console.log("Seluruh Hasil Statistik:");
		console.log("Array dengan jumlah index 100:", this.arrayLengkap);
		console.log("Array genap dengan jumlah index 50:", this.arrayGenap);
		console.log("Array ganjil dengan jumlah index 50:", this.arrayGanjil);

		this.hitungStatistik(this.arrayGenap, "genap");
		this.hitungStatistik(this.arrayGanjil, "ganjil");

		console.log("Perbandingan nilai genap dan ganjil:");
		console.log(
			"Perbandingan Min :",
			this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "cariMin")
		);
		console.log(
			"Perbandingan Max :",
			this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "cariMax")
		);
		console.log(
			"Perbandingan Total :",
			this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "hitungTotal")
		);
		console.log(
			"Perbandingan Rata-Rata :",
			this.bandingkanNilai(this.arrayGenap, this.arrayGanjil, "hitungRata")
		);

		this.mainMenu();
	}

	mainMenu() {
		console.log("Menu:");
		console.log("1. Hitung Statistik Array Genap");
		console.log("2. Hitung Statistik Array Ganjil");
		console.log("3. Tampilkan Seluruh Hasil Perbandingan");
		console.log("4. Tampilkan Seluruh Hasil Statistik");
		console.log("5. Keluar");
		rl.question("Pilih menu (1/2/3/4/5): ", (pilihan) => {
			switch (pilihan) {
				case "1":
					this.hitungStatistik(this.arrayGenap, "genap");
					break;
				case "2":
					this.hitungStatistik(this.arrayGanjil, "ganjil");
					break;
				case "3":
					this.tampilkanSeluruhPerbandingan();
					break;
				case "4":
					this.tampilkanSeluruhHasil();
					break;
				case "5":
					console.log("Terima kasih! Program selesai.");
					rl.close();
					break;
				default:
					console.log("Pilihan tidak valid. Silakan pilih lagi.");
					this.mainMenu();
					break;
			}
		});
	}

	start() {
		console.log("Selamat datang di Program Statistik Array!");
		this.mainMenu();
	}
}

const statistikProgram = new StatistikProgram();
statistikProgram.start();

// 
