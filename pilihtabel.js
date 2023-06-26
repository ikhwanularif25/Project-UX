// Menampilkan tabel default (Tabel 1) saat halaman dimuat
window.onload = function () {
    var defaultTable = document.getElementById("table1");
    defaultTable.classList.add("show");
}

function changeTable(tableId) {
    // Menghilangkan kelas "show" dari semua tabel
    var tables = document.getElementsByClassName("table");
    for (var i = 0; i < tables.length; i++) {
        tables[i].classList.remove("show");
    }

    // Menampilkan tabel yang sesuai dengan ID yang diberikan
    var tableToShow = document.getElementById(tableId);
    tableToShow.classList.add("show");
}

function changeColor(button) {
    // Menghapus kelas "default" dari semua tombol
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("default");
    }

    // Menambahkan kelas "default" ke tombol yang dipilih
    button.classList.add("default");
}