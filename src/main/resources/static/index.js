
let bestilling=[];

function kjopebillett() {

    const riktig = validate();
    if (riktig === true) {

        const billett = {
            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonNr: document.getElementById("telefonNr").value,
            epost: document.getElementById("epost").value,
        };
        bestilling.push(billett);
        let ut = "<table><tr>" +
            "<th>VelgFilm</th><th>Antall</th><th>Fornavn</th><th>EttterNavn</th><th>TelefonNr</th><th>Epost</th>" +
            "</tr>";
        for (let m of bestilling) {
            ut += "<tr>";
            ut += "<td>" + m.film + "</td><td>" + m.antall + "</td><td>" + m.fornavn + "</td><td>" + m.etternavn + "</td><td>" + m.telefonNr + "</td><td>" + m.epost + "</td>";
            ut += "</tr>";
        }

        ut += "</table>"
        document.getElementById("kjopebillett").innerHTML = ut;

        let nullStill = document.getElementsByTagName("input");
        for (let i = 0; i < nullStill.length; i++) {
            if (nullStill[i].type == "text") {
                nullStill[i].value = "";
            }
        }

        document.getElementById("film").selectedIndex = 0;

    }

}

function validate() {
    const film = document.getElementById("film").value;
    const antallInn = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;
    const antall = Number(antallInn);
    let riktig = true;

    if (film === "") {
        document.getElementById("filmdiv").innerHTML = "You must choose name the of Films".fontcolor(color="red")
        riktig = false;
    }
    if (isNaN(antall) || antallInn === "") {
        document.getElementById("antalldiv").innerHTML = "You must to write number of tickets".fontcolor(color="red")
        riktig = false;
    }
    if (fornavn === "") {
        document.getElementById("fornavndiv").innerHTML = "You must to write your name".fontcolor(color="red")
        riktig=false
    }
    if (etternavn === "") {
        document.getElementById("etternavndiv").innerHTML = "You must to write your surname.".fontcolor(color="red")
        riktig = false;
    }
    if (telefonNr === "") {
        document.getElementById("telefonNrdiv").innerHTML = "You must to write your tlfnr".fontcolor(color="red")
        riktig = false;
    }
    if (epost === "") {
        document.getElementById("epostdiv").innerHTML = "You must to wirte your e-post".fontcolor(color="red")
        riktig = false;
    }
    return riktig;
}

function slett(){
    bestilling = [];
    document.getElementById("kjopebillett").innerHTML = "";
}




