let pendaftar = [];
let selectedRowIndex = -1; // Indeks baris yang dipilih untuk update

function openTab(evt, tabName) {
	const tabs = document.getElementsByClassName("tab");
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active-tab");
	}
	document.getElementById(tabName).classList.add("active-tab");
}

function validateForm() {
	const nama = document.getElementById("nama").value;
	const umur = parseInt(document.getElementById("umur").value);
	const uangSangu = parseInt(document.getElementById("uangSangu").value);

	if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
		showErrorPopup("Data yang dimasukkan tidak sesuai. Mohon periksa kembali.");
		return false;
	}

	const dataPendaftar = {
		nama: nama,
		umur: umur,
		uangSangu: uangSangu,
	};

	pendaftar.push(dataPendaftar);
	updateListPendaftar();
	calculateResume();
	showSuccessPopup("Data berhasil disubmit.");

	return false;
}

function showErrorPopup(message) {
	const errorPopup = document.getElementById("errorPopup");
	const errorMessage = document.getElementById("errorMessage");

	errorMessage.innerHTML = message;
	errorPopup.style.display = "block";

	// Sembunyikan pop-up setelah beberapa detik (misalnya, 3 detik)
	setTimeout(function () {
		errorPopup.style.display = "none";
	}, 1000);
}

function showSuccessPopup(message) {
	const successPopup = document.getElementById("successPopup");
	const successMessage = document.getElementById("successMessage");

	successPopup.style.display = "block";
	successMessage.innerHTML = message;

	// Sembunyikan pop-up setelah beberapa detik (misalnya, 3 detik)
	setTimeout(function () {
		successPopup.style.display = "none";
	}, 1000);
}

function updateListPendaftar() {
	const table = document.getElementById("pendaftarTable");
	const tbody = table.getElementsByTagName("tbody")[0];
	tbody.innerHTML = "";

	for (let i = 0; i < pendaftar.length; i++) {
		const data = pendaftar[i];

		const row = tbody.insertRow();
		const cellNama = row.insertCell(0);
		const cellUmur = row.insertCell(1);
		const cellUangSangu = row.insertCell(2);
		const cellAction = row.insertCell(3);

		cellNama.innerHTML = data.nama;
		cellUmur.innerHTML = data.umur;
		cellUangSangu.innerHTML = data.uangSangu;

		// Tambahkan tombol Hapus
		const btnHapus = document.createElement("button");
		btnHapus.innerHTML = "Hapus";
		btnHapus.addEventListener("click", function () {
			pendaftar.splice(i, 1);
			updateListPendaftar();
			calculateResume();
		});
		cellAction.appendChild(btnHapus);

		// Tambahkan tombol Update
		const btnUpdate = document.createElement("button");
		btnUpdate.innerHTML = "Update";
		btnUpdate.addEventListener("click", function () {
			openUpdatePopup(i);
		});
		cellAction.appendChild(btnUpdate);
	}
}

function calculateResume() {
	const totalUmur = pendaftar.reduce((total, data) => total + data.umur, 0);
	const totalUangSangu = pendaftar.reduce((total, data) => total + data.uangSangu, 0);
	const rataRataUmur = totalUmur / pendaftar.length;
	const rataRataUangSangu = totalUangSangu / pendaftar.length;

	const resume = `Rata-rata pendaftar memiliki uang saku sebesar ${rataRataUangSangu} dengan rata-rata umur ${rataRataUmur}`;
	document.getElementById("resume").textContent = resume;
}

// Fungsi untuk membuka pop-up update
function openUpdatePopup(index) {
	selectedRowIndex = index;
	const dataToUpdate = pendaftar[index];
	const updateForm = document.getElementById("updateForm");
	const updatedNama = document.getElementById("updatedNama");
	const updatedUmur = document.getElementById("updatedUmur");
	const updatedUangSangu = document.getElementById("updatedUangSangu");

	updatedNama.value = dataToUpdate.nama;
	updatedUmur.value = dataToUpdate.umur;
	updatedUangSangu.value = dataToUpdate.uangSangu;

	const updatePopup = document.getElementById("updatePopup");
	updatePopup.style.display = "block";
}

// Fungsi untuk menutup pop-up update
function closeUpdatePopup() {
	const updatePopup = document.getElementById("updatePopup");
	updatePopup.style.display = "none";
	selectedRowIndex = -1;
}

// Fungsi untuk menangani submit form update
document.getElementById("updateForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const updatedNama = document.getElementById("updatedNama").value;
	const updatedUmur = parseInt(document.getElementById("updatedUmur").value);
	const updatedUangSangu = parseInt(document.getElementById("updatedUangSangu").value);

	if (
		updatedNama.length < 10 ||
		updatedUmur < 25 ||
		updatedUangSangu < 100000 ||
		updatedUangSangu > 1000000
	) {
		showErrorPopup("Data yang dimasukkan tidak sesuai. Mohon periksa kembali.");
	} else {
		pendaftar[selectedRowIndex].nama = updatedNama;
		pendaftar[selectedRowIndex].umur = updatedUmur;
		pendaftar[selectedRowIndex].uangSangu = updatedUangSangu;
		updateListPendaftar();
		calculateResume();
		closeUpdatePopup();
		showSuccessPopup("Data berhasil diupdate.");
	}
});
