export class Commande {

    constructor (public idcommande : number, public client : string, public date : string, public prixtotal : number, public panier : Array<any>) {
        this.idcommande = idcommande;
        this.client = client;
        this.date = date;
        this.prixtotal = prixtotal;
        this.panier = [];
    }
}
