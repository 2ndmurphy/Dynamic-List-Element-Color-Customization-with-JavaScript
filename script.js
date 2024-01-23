function Genap() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    var selectElement = document.getElementById('warnaGenap');
    var selectedColor = selectElement.value;

    for (var i = 0; i < listItems.length; i++) {
        // Hanya berlaku untuk elemen dengan indeks ganjil
        if (i % 2 !== 0) {
            listItems[i].classList.remove('merah', 'biru', 'kuning');
            listItems[i].classList.add(selectedColor);
        }
    }
}

function Ganjil() {
    var listItems = document.getElementById('list').getElementsByTagName('li');
    var selectElement = document.getElementById('warnaGanjil');
    var selectedColor = selectElement.value;

    for (var i = 0; i < listItems.length; i++) {
        // Hanya berlaku untuk elemen dengan indeks ganjil
        if (i % 2 === 0) {
            listItems[i].classList.remove('merah', 'biru', 'kuning');
            listItems[i].classList.add(selectedColor);
        }
    }
}