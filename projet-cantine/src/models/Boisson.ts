import { Nourriture } from "./supermodels/Nourriture";

export class Boisson extends Nourriture {
  temp: boolean;
  constructor(
    name: string,
    price: number,
    isAvailableOffMenu: boolean,
    availableQuanity: number,
    imgUrl: string,
    type: string,
    temp: boolean,
    id?: string
  ) {
    super(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id);
    this.temp = temp;
  }
}
