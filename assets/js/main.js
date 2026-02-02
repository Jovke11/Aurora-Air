let defaultMenu = "";
window.onload = function () {
    defaultMenu = document.getElementById("meni-bottom").innerHTML;
};
function putnik() {
    document.getElementById("meni-bottom").innerHTML = defaultMenu;
    document.getElementsByClassName("mobile-bottom")[0].innerHTML = defaultMenu;
}
const kompanijeMenu = [
    "Korporativna prodaja",
    "Putničke agencije",
    "Čarter",
    "Kargo",
    "Kontakt"
];
function kompanija() {
    let html = "";
    for (let i = 0; i < kompanijeMenu.length; i++) {
        html += `<li><a href="#">${kompanijeMenu[i]}</a></li>`;
    }
    document.getElementById("meni-bottom").innerHTML = html;
    
    
    document.getElementsByClassName("mobile-bottom")[0].innerHTML = html;
}
const onamaMenu = [
    "Naša priča",
    "Medija centar",
    "Karijera",
    "Elevate",
    "Kontakt"
];
function nama() {
    let html = "";
    for (let i = 0; i < onamaMenu.length; i++) {
        html += `<li><a href="#">${onamaMenu[i]}</a></li>`;
    }
    document.getElementById("meni-bottom").innerHTML = html;
    document.getElementsByClassName("mobile-bottom")[0].innerHTML = html;
}
const gradOd = [
    "Beograda",
    "Niša",
    "Kraljeva"
];
const gradDo = [
    "Atine",
    "Berlina",
    "Ciriha",
    "Denvera",
    "Rima",
    "Firence"
];
function kupiKartu(event) {
    event.preventDefault();
    const selectOd = document.getElementById("od");
    const selectDo = document.getElementById("do");
    const indexOd = selectOd.selectedIndex - 1;
    const indexDo = selectDo.selectedIndex - 1;
    if (indexOd < 0 && indexDo < 0) {
        showCustomAlert("Molimo izaberite grad polaska i dolaska!");
        return;
    }
    if (indexDo < 0) {
        showCustomAlert("Molimo izaberite grad dolaska!");
        return;
    }
    if (indexOd < 0) {
        showCustomAlert("Molimo izaberite grad polaska!");
        return;
    }
    const datumPolaska = document.getElementById("datumPolaska").value;
    const datumPovratka = document.getElementById("datumPovratka").value;
    const putnici = Number(document.getElementById("putnici").value);
    const promoKod = document.getElementById("promo-kod").value.trim();
    if (!datumPolaska) {
        showCustomAlert("Molimo izaberite datum polaska!");
        return;
    }
    if (!datumPovratka) {
        showCustomAlert("Molimo izaberite datum povratka!");
        return;
    }
    if (!putnici || putnici <= 0) {
        showCustomAlert("Molimo unesite broj putnika!");
        return;
    }
    if (datumPolaska > datumPovratka) {
        showCustomAlert("Molimo unesite ispravan datum polaska i dolaska!");
        return;
    }
    let popust = 0;

    if (promoKod.toLowerCase() === "ict") {
        popust = 30;
    }

    let porukaPopust = "";
    if (popust > 0) {
        porukaPopust = `<br><b>Ostvarili ste ${popust}% popusta</b> korišćenjem koda <b>${promoKod.toUpperCase()}</b> 🎉`;
    }
    const izGrada = gradOd[indexOd];
    const uGrad = gradDo[indexDo];
    showCustomAlert(`✈️ USPEŠNA REZERVACIJA ✈️<br> Let na relaciji od ${izGrada} do ${uGrad}✅ <br> Smer: ${tipLeta} ⇄ <br> Datum polaska: ${datumPolaska}📅 <br> Datum povratka: ${datumPovratka}📅 <br> Broj putnika: ${putnici} 🧍‍♂️<br> ${porukaPopust} <br> <br><br> Hvala što letite sa Aurora Air!✈️`);
}
function resetForme() {
    document.getElementById("flight-form").reset();
}
const povratniBtn = document.getElementById("povratni");
const jedanSmerBtn = document.getElementById("jedanSmer");
$(povratniBtn).click(function () {
    povratniBtn.classList.add("active");
    jedanSmerBtn.classList.remove("active");
});
$(jedanSmerBtn).click(function () {
    jedanSmerBtn.classList.add("active");
    povratniBtn.classList.remove("active");
});
let tipLeta = "Povratni";
$("#povratni").click(function () {
    tipLeta = "Povratni";
})
$("#jedanSmer").click(function () {
    tipLeta = "Jedan smer";
})
function showCustomAlert(message) {
    document.getElementById("customAlertBody").innerHTML = message;
    var myModal = new bootstrap.Modal(document.getElementById('customAlert'));
    myModal.show();
}
function rezervisi() {
    document.querySelector("#search-flight").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
$(document).ready(function () {
    $('.toggle-info').click(function () {

        const info = $(this).closest('#athens, #berlin, #rome, #firenca').find('.city-info');
        info.toggle();

        if (info.is(':visible')) {
            $(this).val('Prikaži manje');
        } else {
            $(this).val('Saznaj više');
        }
    });
});
let sliderImg = document.getElementById("sliderImg");
function slider() {
    if(sliderImg == null) {
        return;
    }
    if (sliderImg.src.includes("zalazak")) {
        sliderImg.src = "assets/img/plaza.jpg";
    }
    else if (sliderImg.src.includes("plaza")) {
        sliderImg.src = "assets/img/grad.jpg";
    }
    else {
        sliderImg.src = "assets/img/zalazak.jpg";
    }

    setTimeout(slider, 3000);
}
slider();
const kontaktId = [
    "lastname-contact",
    "mail-contact",
    "number-contact"
];

const placeHolder = [
    "Ime i Prezime",
    "E-mail",
    "Broj telefona: +381"
];

let kontaktForma = "<form>";

for (let i = 0; i < placeHolder.length; i++) {
    kontaktForma += "<input type='text' id='" + kontaktId[i] +
                    "' class='form-contact' placeholder='" +
                    placeHolder[i] + "'/>";
}


kontaktForma += "<textarea id='question-contact' class='form-contact' " +
                "placeholder='Dodatna pitanja' rows='7' cols='10'></textarea>";

kontaktForma += "<div class='check-wrapper'>" +
                "<label>" +
                "<input type='checkbox' id='check-contact'/>" +
                " Prihvatam uslove korišćenja" +
                "</label>" +
                "</div>";

kontaktForma += "<div class='btn-wrapper'>" +
                "<input type='button' id='taster' value='Prijavi se'/>" +
                "</div>";

kontaktForma += "</form>";

if(document.getElementById("name-contact") != null) {
    document.getElementById("name-contact").innerHTML = kontaktForma;
}
$("#taster").click(function() {
    const imeInput = document.getElementById("lastname-contact");
    const emailInput = document.getElementById("mail-contact");
    const brojInput = document.getElementById("number-contact");
    const ime = imeInput.value.trim();
    const email = emailInput.value.trim();
    const broj = brojInput.value.trim();
    document.querySelectorAll(".error-message").forEach(e => e.remove());
    let greska = false;
    if (!/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(ime)) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Molimo unesite ime i prezime sa početnim velikim slovima!";
        imeInput.after(span);
        greska = true;
    }

    
    if (!email.includes("@gmail")) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Molimo unesite validan Gmail!";
        emailInput.after(span);
        greska = true;
    }

    
    if (!broj.startsWith("+381")) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Broj telefona mora početi sa +381!";
        brojInput.after(span);
        greska = true;
    }

    if (!greska) {
        showCustomAlert("Forma je uspešno poslata!");
    }
})
$("#prijavi-se").click(function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
})

$("#go-find").click(function(e) {
    e.preventDefault();
    document.getElementById("athens").scrollIntoView({
         behavior: "smooth" 
    });
});
$("#go-contact").click(function(e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
});
$("#go-info").click(function(e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
         behavior: "smooth" 
        });
});    
$("#hamburger").on("click", function () {
    
    
    $("#mobile-menu").toggleClass("active");
});
$(document).on("click", "a[href^='#']", function (e) {
    const targetId = $(this).attr("href");

    if (targetId === "#" || targetId === "") return;

    e.preventDefault();

    const targetEl = document.querySelector(targetId);

    if (targetEl) {
        targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    
    $("#mobile-menu").removeClass("active");
});
window.addEventListener("load", function () {
    const today = new Date().toISOString().split("T")[0];

    document.getElementById("datumPolaska").setAttribute("min", today);
    document.getElementById("datumPovratka").setAttribute("min", today);
});

