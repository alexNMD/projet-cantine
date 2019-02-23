import { Nourriture } from "./supermodels/Nourriture";

export class Entree extends Nourriture {
  description: string;
  ingredients: string[];
  temp: boolean;
  constructor(
    ingredients: string[],
    name: string,
    price: number,
    isAvailableOffMenu: boolean,
    availableQuanity: number,
    imgUrl: string,
    description: string,
    temp: boolean,
    type : string,
    id?: string,
  ) {
    super(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id);

    this.ingredients = ingredients;
    this.description = description;
    this.temp = temp;
  }
}
