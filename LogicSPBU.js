// Logika Operator
function getStatusBBM(jenis, cc) {
	if (jenis === "kuning" || jenis === "motor") {
		return "BBM subsidi";
	} else if (jenis === "mobil" && cc < 1500) {
		return "PERTAMAX";
	} else {
		return "PERTAMAX turbo";
	}
}

// Input
const kendaraan1 = { jenis: "motor", plat: "kuning" };
const kendaraan2 = { jenis: "mobil", cc: 1350 };
const kendaraan3 = { jenis: "mobil", cc: 1700 };

// Output
console.log("Jenis:", kendaraan1.jenis, "atau Plat:", kendaraan1.plat, "- Status BBM:", getStatusBBM(kendaraan1.jenis, kendaraan1.plat));
console.log("Jenis:", kendaraan2.jenis, "CC:", kendaraan2.cc, "- Status BBM:", getStatusBBM(kendaraan2.jenis, kendaraan2.cc));
console.log("Jenis:", kendaraan3.jenis, "CC:", kendaraan3.cc, "- Status BBM:", getStatusBBM(kendaraan3.jenis, kendaraan3.cc));
