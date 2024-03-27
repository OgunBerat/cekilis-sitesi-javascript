var katilimciSayisi = null;
var aktifInput = 1;

function katilimciSayisiniAyarla() {
    katilimciSayisi = parseInt(document.getElementById("katilimciSayisi").value);

    if (isNaN(katilimciSayisi) || katilimciSayisi <= 0) {
        alert("Geçersiz katılımcı sayısı.");
    } else {
        localStorage.setItem("katilimciSayisi", katilimciSayisi);
        document.getElementById("katilimciSayisiSoru").style.display = "none";
        document.getElementById("cekilisSayfasi").style.display = "block";
        isimAlanlariniOlustur();
    }
}

function isimAlanlariniOlustur() {
    var alanlarHTML = "";
    for (var i = 1; i <= katilimciSayisi; i++) {
        alanlarHTML += '<input type="text" id="isim' + i + '" placeholder="İsim ' + i + '" onkeydown="gecis(event, ' + i + ')"><br>';
    }
    document.getElementById("isimAlanlari").innerHTML = alanlarHTML;
}

function gecis(event, sirano) {
    if (event.keyCode === 13) {
        if (sirano < katilimciSayisi) {
            document.getElementById("isim" + (sirano + 1)).focus();
            aktifInput = sirano + 1;
        } else {
            rastgeleKisiSec();
        }
    }
}

function rastgeleKisiSec() {
    var isimler = [];
    for (var i = 1; i <= katilimciSayisi; i++) {
        var isim = document.getElementById("isim" + i).value.trim();
        if (isim !== "") {
            isimler.push(isim);
        }
    }

    if (isimler.length === 0) {
        alert("Lütfen en az bir isim girin.");
    } else {
        var rastgeleIndex = Math.floor(Math.random() * isimler.length);
        var kazanan = isimler[rastgeleIndex];
        document.getElementById("sonuc").innerText = "Kazanan: " + kazanan;
    }
}