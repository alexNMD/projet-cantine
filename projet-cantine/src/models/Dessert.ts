import { Nourriture } from "./supermodels/Nourriture";

export class Dessert extends Nourriture {
  isFrozen: boolean;
  constructor(
    name: string,
    price: number,
    isAvailableOffMenu: boolean,
    availableQuanity: number,
    imgUrl: string,
    type: string,
    isFrozen: boolean,
    id?: String,
  ) {
    super(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id);
    this.isFrozen = isFrozen;
  }
}
