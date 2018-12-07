export class Plat {
    public name: string;
    public price: number;
    public temp: string;
    public type_dish: string;
    public image: string;
    public ingredients: Array<string>;
    public date: Date;
    constructor(name, price, type_dish, temp, ingredients, image, date) {
        this.name = name;
        this.price = price;
        this.type_dish = type_dish;
        this.temp = temp;
        this.ingredients = new Array(ingredients);
        this.image = image;
        this.date = date;
    }
}
