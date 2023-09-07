// Logika Operator
function getStatusAir(suhu) {
	if (suhu >= -100 && suhu <= 0) {
		return "Beku";
	} else if (suhu >= 1 && suhu <= 100) {
		return "Cair";
	} else if (suhu >= 101 && suhu <= 500) {
		return "Uap";
	} else {
		return "Tidak terdefinisi";
	}
}

// Input
const suhu1 = -30;
const suhu2 = 75;
const suhu3 = 320;
const suhu4 = 525;

// Output
console.log("Suhu " + suhu1 + " : " + getStatusAir(suhu1));
console.log("Suhu " + suhu2 + " : " + getStatusAir(suhu2));
console.log("Suhu " + suhu3 + " : " + getStatusAir(suhu3));
console.log("Suhu " + suhu4 + " : " + getStatusAir(suhu4));
