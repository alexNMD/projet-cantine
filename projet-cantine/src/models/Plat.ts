import {Nourriture} from "./supermodels/Nourriture";

export class Plat extends Nourriture {
    type : string;
    ingredients : string[];
    temp : boolean;
    constructor(name:string,
        price:number,
        isAvailableOffMenu:boolean,
        availableQuanity:number,
        imgUrl : string,
        type: string,
        ingredients : string[],
        temp: boolean,
        id?: string,
        )
        {
        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id);
        this.ingredients = ingredients;
        this.temp = temp;
    }

}