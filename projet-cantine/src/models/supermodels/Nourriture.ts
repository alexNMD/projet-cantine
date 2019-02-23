export class Nourriture {
  name: string;
  price: number;
  isAvailableOffMenu: boolean;
  availableQuantity: number;
  imgUrl: string;
  type: string;
  id: string;

  constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, id?) {
    this.name = name;
    this.price = price;
    this.isAvailableOffMenu = isAvailableOffMenu;
    this.availableQuantity = availableQuanity;
    this.imgUrl = imgUrl;
    this.type = type;
    this.id = id;
  }

}

