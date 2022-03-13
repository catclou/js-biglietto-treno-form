// Prendere il dato dall'input text
let nome = document.getElementById("name");
console.log(nome);

// Prendere il dato dall'input number
let km = document.getElementById("inputChilometri");

// Prendere il dato dal select sulla fascia d'età
let fasciaEta = document.getElementById("fasciaEta");

// Definire il bottone "Genera"
let bottoneGenera = document.getElementById("btnGenera");
console.log(bottoneGenera);

// Definire il bottone "Annulla"
let bottoneAnnulla = document.getElementById("btnAnnulla");

// GENERARE BIGLIETTO AL CLICK DI "GENERA"
bottoneGenera.addEventListener("click",
    function() {
        // far visualizzare il biglietto generato
        bigliettoGenerato.classList.remove("d-none");
        // richiamare il nome sotto "Nome Passeggero"
        nomePasseggero.innerHTML = nome.value;
        // generare un numero random per la carrozza
        let numeroRandomCarrozza = Math.floor( (Math.random() * 5) + 1);
        numeroCarrozza.innerHTML = `${numeroRandomCarrozza}`;
        // generare un numero random per il codice CP
        let numeroRandomCP = Math.floor(Math.random() * 99999);
        codiceCP.innerHTML = `${numeroRandomCP}`;
        // elaborare il prezzo in base ai km da percorrere e alla fascia d'età
        if (fasciaEta.value == "minorenne") {
            offerta.innerHTML = `Tariffa Young`;
            costoBiglietto.innerHTML = `€ ${((km.value * 0.21) * 0.80).toFixed(2)}`;
        } else if (fasciaEta.value == "maggiorenne") {
            offerta.innerHTML = `Tariffa Standard`;
            costoBiglietto.innerHTML = `€ ${(km.value * 0.21).toFixed(2)}`;
        } else {
            offerta.innerHTML = `Tariffa Senior`;
            costoBiglietto.innerHTML = `€ ${((km.value * 0.21) * 0.60).toFixed(2)}`;
        }
    }
)

// NASCONDERE BIGLIETTO AL CLICK DI "ANNULLA"
bottoneAnnulla.addEventListener("click",
    function() {
        bigliettoGenerato.classList.add("d-none");
    }
)
