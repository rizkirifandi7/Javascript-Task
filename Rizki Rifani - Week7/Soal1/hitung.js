// Menghitung luas persegi
function hitungLuasPersegi(sisi) {
	return sisi * sisi;
}

// Menghitung keliling persegi
function hitungKelilingPersegi(sisi) {
	return 4 * sisi;
}

// Menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
	return panjang * lebar;
}

// Menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang(panjang, lebar) {
	return 2 * (panjang + lebar);
}

module.exports = {
	hitungLuasPersegi,
	hitungKelilingPersegi,
	hitungLuasPersegiPanjang,
	hitungKelilingPersegiPanjang,
};
