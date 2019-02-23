import { Nourriture } from "./supermodels/Nourriture";

export class Snack extends Nourriture {
  type: string;
  isSalty: Boolean;
  constructor(
    name: string,
    price: number,
    isAvailableOffMenu: boolean,
    availableQuanity: number,
    imgUrl: string,
    type: string,
    isSalty: boolean,
    id?: string,
  ) {
    super(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id);
    this.isSalty = isSalty;
  }
}
