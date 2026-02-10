const navigacijaTop = [
    { text: "Za putnike", klik: "putnik()" },
    { text: "Za kompanije", klik: "kompanija()" },
    { text: "O nama", klik: "nama()" },
    { text: "O autoru", href: "o-autoru.html", class: "autor" },
    { text: "Zip sajta", href: "AuroraAir.zip", id: "zip-main", download: true }
];
function renderTopMenu() {
    let html = "";

    for (let i = 0; i < navigacijaTop.length; i++) {
        html += "<li";

        if (navigacijaTop[i].class) {
            html += " class='" + navigacijaTop[i].class + "'";
        }

        if (navigacijaTop[i].klik) {
            html += " onclick=\"" + navigacijaTop[i].klik + "\"";
        }

        html += ">";

        html += "<a";

        if (navigacijaTop[i].href) {
            html += " href='" + navigacijaTop[i].href + "'";
        } else {
            html += " role='button'";
        }

        if (navigacijaTop[i].id) {
            html += " id='" + navigacijaTop[i].id + "'";
        }

        if (navigacijaTop[i].download) {
            html += " download";
        }

        html += ">";

        html += navigacijaTop[i].text;
        html += "</a></li>";
    }

    document.getElementById("meni-top").innerHTML = html;
}

const navigacije = {
    putnici: [
        { text: "Rezerviši", id: "items-bottom1", href: "#background" },
        { text: "Moja rezervacija", id: "items-bottom2", href: "#background" },
        { text: "Check-in", id: "items-bottom3", href: "#background" },
        { text: "Otkrij", id: "items-bottom4", href: "#city" },
        { text: "Info | Pomoć", id: "items-bottom5", href: "#contact" },
        { text: "Kontakt", class: "items-bottom", href: "#contact" }
    ],
    kompanije: [
        { text: "Korporativna prodaja" },
        { text: "Putničke agencije" },
        { text: "Čarter" },
        { text: "Kargo" },
        { text: "Kontakt" }
    ],
    onama: [
        { text: "Naša priča" },
        { text: "Medija centar" },
        { text: "Karijera" },
        { text: "Elevate" },
        { text: "Kontakt" }
    ]
};

function renderMenu(menu) {
    let html = "";
    for (let i = 0; i < menu.length; i++) {
        html += "<li>";
        html += '<a href="' + (menu[i].href ? menu[i].href : "#") + '">';
        html += menu[i].text;
        html += "</a>";
        html += "</li>";
    }
    document.getElementById("meni-bottom").innerHTML = html;
    document.getElementsByClassName("mobile-bottom")[0].innerHTML = html;
}

function putnik() { renderMenu(navigacije.putnici); }
function kompanija() { renderMenu(navigacije.kompanije); }
function nama() { renderMenu(navigacije.onama); }

document.addEventListener("DOMContentLoaded", function () {
    renderMenu(navigacije.putnici);
    renderTopMenu();
});


const gradOd = ["Beograda", "Niša", "Kraljeva"];
const gradDo = ["Atine", "Berlina", "Ciriha", "Denvera", "Rima", "Firence"];

function kupiKartu(event) {
    event.preventDefault();
    const selectOd = document.getElementById("od");
    const selectDo = document.getElementById("do");
    const indexOd = selectOd.selectedIndex - 1;
    const indexDo = selectDo.selectedIndex - 1;

    if (indexOd < 0 && indexDo < 0) return showCustomAlert("Molimo izaberite grad polaska i dolaska!");
    if (indexDo < 0) return showCustomAlert("Molimo izaberite grad dolaska!");
    if (indexOd < 0) return showCustomAlert("Molimo izaberite grad polaska!");

    const datumPolaska = document.getElementById("datumPolaska").value;
    const datumPovratka = document.getElementById("datumPovratka").value;
    const putnici = Number(document.getElementById("putnici").value);
    const promoKod = document.getElementById("promo-kod").value.trim();

    if (!datumPolaska) return showCustomAlert("Molimo izaberite datum polaska!");
    if (!datumPovratka) return showCustomAlert("Molimo izaberite datum povratka!");
    if (!putnici || putnici <= 0) return showCustomAlert("Molimo unesite broj putnika!");
    if (datumPolaska > datumPovratka) return showCustomAlert("Molimo unesite ispravan datum polaska i dolaska!");

    let popust = promoKod.toLowerCase() === "ict" ? 30 : 0;

    let porukaPopust = popust > 0 ?
        `<br><b>Ostvarili ste ${popust}% popusta</b> korišćenjem koda <b>${promoKod.toUpperCase()}</b> 🎉` : "";

    showCustomAlert(`✈️ USPEŠNA REZERVACIJA ✈️<br>
     Let na relaciji od ${gradOd[indexOd]} do ${gradDo[indexDo]}✅ <br>
     Smer: ${tipLeta} ⇄ <br>
     Datum polaska: ${datumPolaska}📅 <br>
     Datum povratka: ${datumPovratka}📅 <br>
     Broj putnika: ${putnici} 🧍‍♂️<br>
     ${porukaPopust}<br><br>Hvala što letite sa Aurora Air!✈️`);
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
$("#povratni").click(function () { tipLeta = "Povratni"; });
$("#jedanSmer").click(function () { tipLeta = "Jedan smer"; });

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



let sliderImg = document.getElementById("sliderImg");
let slike = [
    "assets/img/zalazak.jpg",
    "assets/img/plaza.jpg",
    "assets/img/grad.jpg"
];
let indexSlike = 0;

function slider() {
    if (!sliderImg) return;
    sliderImg.src = slike[indexSlike];
    indexSlike++;
    if (indexSlike >= slike.length) indexSlike = 0;
    setTimeout(slider, 3000);
}
slider();

const kontaktId = ["lastname-contact", "mail-contact", "number-contact"];
const placeHolder = ["Ime i Prezime", "E-mail", "Broj telefona: +381"];

let kontaktForma = "<form>";

for (let i = 0; i < placeHolder.length; i++) {
    kontaktForma += "<input type='text' id='" + kontaktId[i] +
        "' class='form-contact' placeholder='" + placeHolder[i] + "'/>";
}

kontaktForma += "<textarea id='question-contact' class='form-contact' placeholder='Dodatna pitanja' rows='7'></textarea>";
kontaktForma += "<div class='check-wrapper'><label><input type='checkbox' id='check-contact'/> Prihvatam uslove korišćenja</label></div>";
kontaktForma += "<div class='btn-wrapper'><input type='button' id='taster' value='Prijavi se'/></div>";
kontaktForma += "</form>";

if (document.getElementById("name-contact") != null) {
    document.getElementById("name-contact").innerHTML = kontaktForma;
}

function validIme(ime) { return /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(ime); }
function validEmail(email) { return email.includes("@gmail"); }
function validBroj(broj) { return broj.startsWith("+381"); }

$("#taster").click(function () {
    const imeInput = document.getElementById("lastname-contact");
    const emailInput = document.getElementById("mail-contact");
    const brojInput = document.getElementById("number-contact");

    const ime = imeInput.value.trim();
    const email = emailInput.value.trim();
    const broj = brojInput.value.trim();

    document.querySelectorAll(".error-message").forEach(e => e.remove());

    let greska = false;

    if (!validIme(ime)) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Molimo unesite ime i prezime sa početnim velikim slovima!";
        imeInput.after(span);
        greska = true;
    }

    if (!validEmail(email)) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Molimo unesite validan Gmail!";
        emailInput.after(span);
        greska = true;
    }

    if (!validBroj(broj)) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.textContent = "Broj telefona mora početi sa +381!";
        brojInput.after(span);
        greska = true;
    }

    if (!greska) showCustomAlert("Forma je uspešno poslata!");
});
function scrollNa(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

$("#prijavi-se").click(function () { scrollNa("contact"); });
$("#go-find").click(function (e) { e.preventDefault(); scrollNa("athens"); });
$("#go-contact").click(function (e) { e.preventDefault(); scrollNa("contact"); });
$("#go-info").click(function (e) { e.preventDefault(); scrollNa("contact"); });

$("#hamburger").on("click", function () {
    $("#mobile-menu").toggleClass("active");
});

$(document).on("click", "a[href^='#']", function (e) {
    const targetId = $(this).attr("href");
    if (targetId === "#" || targetId === "") return;
    e.preventDefault();
    const targetEl = document.querySelector(targetId);
    if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
    $("#mobile-menu").removeClass("active");
});

window.addEventListener("load", function () {
    const datumPolaskaEl = document.getElementById("datumPolaska");
    const datumPovratkaEl = document.getElementById("datumPovratka");

    
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    datumPolaskaEl.setAttribute("min", todayStr);

    
    function updatePovratakMin() {
        const polazakDate = new Date(datumPolaskaEl.value);
        polazakDate.setDate(polazakDate.getDate() + 1); 
        const pYear = polazakDate.getFullYear();
        const pMonth = String(polazakDate.getMonth() + 1).padStart(2, '0');
        const pDay = String(polazakDate.getDate()).padStart(2, '0');
        datumPovratkaEl.setAttribute("min", `${pYear}-${pMonth}-${pDay}`);

        
        if (datumPovratkaEl.value <= datumPolaskaEl.value) {
            datumPovratkaEl.value = `${pYear}-${pMonth}-${pDay}`;
        }
    }

    datumPolaskaEl.addEventListener("change", updatePovratakMin);

   
    updatePovratakMin();
});

$(document).ready(function () {

    $(".city-info").hide();

    $(document).on("click", ".toggle-info", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const info = $(this).closest("div[id]").find(".city-info").first();

        info.stop(true, true).slideToggle(300);

        if ($(this).val() === "Saznaj više") {
            $(this).val("Prikaži manje");
        } else {
            $(this).val("Saznaj više");
        }
    });

});
