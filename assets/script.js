//Crea class principale
var Clothes = /** @class */ (function () {
    function Clothes(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Clothes.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa - this.saldo) / 100;
    };
    Clothes.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Clothes;
}());
//Fetch 
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log("Array dalla fetch: ", data);
    var clothes = data.map(function (item) {
        return new Clothes(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
    });
    console.log("Array restituito da map: ", clothes);
    clothes.forEach(function (clothes) {
        console.log("Capo: ", clothes.capo);
        console.log("Saldo: ", clothes.getSaldoCapo());
        console.log("Totale capo: ", clothes.getAcquistoCapo());
    });
});
