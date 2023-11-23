//Crea class principale
class Clothes {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:string;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(
        id:number, 
        codprod:number, 
        collezione:string, 
        capo:string, 
        modello:string, 
        quantita:number, 
        colore:string, 
        prezzoivaesclusa:number, 
        prezzoivainclusa:number, 
        disponibile:string, 
        saldo:number
        ) {
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

        getSaldoCapo():number{
            return (this.prezzoivainclusa - this.saldo) /100
        }

        getAcquistoCapo():number{
            return this.prezzoivainclusa - this.getSaldoCapo()
        }
}

//Fetch 
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
.then((response) => response.json())
.then((data) => {
    console.log("Array dalla fetch: ", data)

    const clothes = data.map((item:any) => {
        return new Clothes(
            item.id,
            item.codprod,
            item.collezione,
            item.capo,
            item.modello,
            item.quantita,
            item.colore,
            item.prezzoivaesclusa,
            item.prezzoivainclusa,
            item.disponibile,
            item.saldo
        )
    })

    console.log("Array restituito da map: ", clothes)

    clothes.forEach((clothes) => {
        console.log("Capo: ", clothes.capo)
        console.log("Saldo: ", clothes.getSaldoCapo())
        console.log("Totale capo: ", clothes.getAcquistoCapo())
    })
})
