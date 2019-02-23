import {Boisson} from './Boisson'
import {Snack} from './Snack'
import {Dessert} from './Dessert'
import {Plat} from './Plat'

export class Menu {
    name: string;
    entree: string;
    plat: string;
    dessert: string;
    snack: string;
    boisson: string;
    date: any[];
    id: string;
    imgUrl?: string;
    price?: number;
    constructor(name: string, date: any[], plat: string, entree: string, dessert?: string, snack?: string, boisson?: string, id?: string, imgUrl?: string) {
        this.name = name;
        this.entree = entree;
        this.plat = plat;
        this.dessert = dessert;
        this.snack = snack;
        this.boisson = boisson;
        this.date = date;
        this.id = id;
        this.imgUrl = imgUrl;
    }

/*    getPrice(entree, plat, dessert?, snack?, boisson?) {
        let totalCost = entree.price + plat.price + (dessert ? dessert.price : 0) + (snack ? snack.price : 0) + (boisson ? boisson.price : 0);
        return totalCost;
    }*/
}