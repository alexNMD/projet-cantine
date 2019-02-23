import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Plat } from '../../models/Plat';
import { Dessert } from '../../models/Dessert';
import { Snack } from '../../models/Snack';
import { Boisson } from '../../models/Boisson';
import { Entree } from '../../models/Entree';
import { Nourriture } from '../../models/supermodels/Nourriture';
import { Menu } from '../../models/Menu';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
    nourritureCollection: AngularFirestoreCollection<Nourriture>;
    nourritureDocument: AngularFirestoreDocument<Nourriture>;
    menuDocument: AngularFirestoreDocument<Menu>;
    menuCollection: AngularFirestoreCollection<Menu>;
    constructor(
        private http: HttpClient,
        private cantineappdb: AngularFirestore
    ) {}
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return error;
        };
    }
    pushNourritureToDb<Nourriture>(nourriture) {
        let typeOfNourriture = "";
        switch (nourriture.type) {
            case "Plat": {
                typeOfNourriture = "Plats";
                break;
            }
            case "Entree": {
                typeOfNourriture = "Entrees";
                break;
            }
            case "Snack": {
                typeOfNourriture = "Snacks";
                break;
            }
            case "Boisson": {
                typeOfNourriture = "Boissons";
                break;
            }
            case "Dessert": {
                typeOfNourriture = "Desserts";
                break;
            }
        }

        let nourritureJson = JSON.parse(JSON.stringify(nourriture));
        console.log(nourritureJson);

        return new Promise((res, rej) => {
            this.cantineappdb
                .collection("Inventaire")
                .doc("Nourriture")
                .collection(typeOfNourriture)
                .add({ nourritureJson })
                .then(function() {
                    console.log("Document ajouté!");
                    res();
                })
                .catch(function(error) {
                    rej();
                    this.handleError(error);
                });
        });
    }
    getNourritureFromDb(type): Promise<any> {
        this.nourritureCollection = this.cantineappdb
            .collection("Inventaire")
            .doc("Nourriture")
            .collection(type);

        return new Promise((resolve, reject) => {
            switch (type) {
                case "Plats": {
                    this.nourritureCollection.ref.get().then(data => {
                        let platArray: Plat[] = [];
                        data.docs.forEach(doc => {
                            let plat = new Plat("", 0, false, 0, "", "", [""], false);
                            plat.name = doc.data().nourritureJson.name;
                            plat.price = doc.data().nourritureJson.price;
                            plat.ingredients = doc.data().nourritureJson.ingredients;
                            plat.type = doc.data().nourritureJson.type;
                            plat.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            plat.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            plat.imgUrl = doc.data().nourritureJson.imgUrl;
                            plat.temp = doc.data().nourritureJson.temp;
                            plat.id = doc.id;
                            platArray.push(plat);
                        });
                        resolve(platArray);
                    });
                    break;
                }
                case "Entrees": {
                    this.nourritureCollection.ref.get().then(data => {
                        let entreeArray: Entree[] = [];
                        data.docs.forEach(doc => {
                            let entree = new Entree([""], "", 0, false, 0, "", "", false, "");
                            entree.name = doc.data().nourritureJson.name;
                            entree.price = doc.data().nourritureJson.price;
                            entree.ingredients = doc.data().nourritureJson.ingredients;
                            entree.type = doc.data().nourritureJson.type;
                            entree.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            entree.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            entree.imgUrl = doc.data().nourritureJson.imgUrl;
                            entree.temp = doc.data().nourritureJson.temp;
                            entree.description = doc.data().nourritureJson.description;
                            entree.id = doc.id;
                            entreeArray.push(entree);
                        });
                        resolve(entreeArray);
                    });
                    break;
                }
                case "Snacks": {
                    this.nourritureCollection.ref.get().then(data => {
                        let snackArray: Snack[] = [];
                        data.docs.forEach(doc => {
                            let snack = new Snack("", 0, false, 0, "", "", false);
                            snack.name = doc.data().nourritureJson.name;
                            snack.price = doc.data().nourritureJson.price;
                            snack.type = doc.data().nourritureJson.type;
                            snack.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            snack.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            snack.imgUrl = doc.data().nourritureJson.imgUrl;
                            snack.isSalty = doc.data().nourritureJson.isSalty;
                            snack.id = doc.id;
                            snackArray.push(snack);
                        });
                        resolve(snackArray);
                    });
                    break;
                }
                case "Boissons": {
                    this.nourritureCollection.ref.get().then(data => {
                        let boissonArray: Boisson[] = [];
                        data.docs.forEach(doc => {
                            let boisson = new Boisson("", 0, false, 0, "", "", false);
                            boisson.name = doc.data().nourritureJson.name;
                            boisson.price = doc.data().nourritureJson.price;
                            boisson.type = doc.data().nourritureJson.type;
                            boisson.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            boisson.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            boisson.imgUrl = doc.data().nourritureJson.imgUrl;
                            boisson.temp = doc.data().nourritureJson.temp;
                            boisson.id = doc.id;
                            boissonArray.push(boisson);
                        });
                        resolve(boissonArray);
                    });
                    break;
                }
                case "Desserts": {
                    this.nourritureCollection.ref.get().then(data => {
                        let dessertArray: Dessert[] = [];
                        data.docs.forEach(doc => {
                            let dessert = new Dessert("", 0, false, 0, "", "", false);
                            dessert.name = doc.data().nourritureJson.name;
                            dessert.price = doc.data().nourritureJson.price;
                            dessert.isFrozen = doc.data().nourritureJson.isFrozen;
                            dessert.type = doc.data().nourritureJson.type;
                            dessert.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            dessert.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            dessert.imgUrl = doc.data().nourritureJson.imgUrl;
                            dessert.id = doc.id;
                            dessertArray.push(dessert);
                        });
                        resolve(dessertArray);
                    });
                    break;
                }
                default: {
                    console.log("Aucun type sélectionné");
                    reject();
                }
            }
        });
    }
    getOneNourritureFromDb(type: string, key: string): Promise<any> {
        this.nourritureDocument = this.cantineappdb
            .collection('Inventaire')
            .doc('Nourriture')
            .collection(type)
            .doc(key);
        return new Promise((resolve, reject) => {
            switch (type) {
                case 'Plats': {
                    this.nourritureDocument.ref.get()
                        .then((doc) => {
                            let plat = new Plat("", 0, false, 0, "", "", [""], false);
                            plat.name = doc.data().nourritureJson.name;
                            plat.price = doc.data().nourritureJson.price;
                            plat.ingredients = doc.data().nourritureJson.ingredients;
                            plat.type = doc.data().nourritureJson.type;
                            plat.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            plat.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            plat.imgUrl = doc.data().nourritureJson.imgUrl;
                            plat.temp = doc.data().nourritureJson.temp;
                            plat.id = doc.id;
                            resolve(plat);
                        });
                    break;
                }
                case 'Entrees': {
                    console.log('entree');
                    this.nourritureDocument.ref.get()
                        .then((doc) => {
                            let entree = new Plat("", 0, false, 0, "", "", [""], false);
                            entree.name = doc.data().nourritureJson.name;
                            entree.price = doc.data().nourritureJson.price;
                            entree.ingredients = doc.data().nourritureJson.ingredients;
                            entree.type = doc.data().nourritureJson.type;
                            entree.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            entree.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            entree.imgUrl = doc.data().nourritureJson.imgUrl;
                            entree.temp = doc.data().nourritureJson.temp;
                            entree.id = doc.id;
                            resolve(entree);
                        });
                    break;
                }
                case 'Boissons': {
                    this.nourritureDocument.ref.get()
                        .then((doc) => {
                            let boisson = new Plat("", 0, false, 0, "", "", [""], false);
                            boisson.name = doc.data().nourritureJson.name;
                            boisson.price = doc.data().nourritureJson.price;
                            boisson.ingredients = doc.data().nourritureJson.ingredients;
                            boisson.type = doc.data().nourritureJson.type;
                            boisson.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            boisson.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            boisson.imgUrl = doc.data().nourritureJson.imgUrl;
                            boisson.temp = doc.data().nourritureJson.temp;
                            boisson.id = doc.id;
                            resolve(boisson);
                        });
                    break;
                }
                case 'Desserts': {
                    this.nourritureDocument.ref.get()
                        .then((doc) => {
                            let dessert = new Plat("", 0, false, 0, "", "", [""], false);
                            dessert.name = doc.data().nourritureJson.name;
                            dessert.price = doc.data().nourritureJson.price;
                            dessert.ingredients = doc.data().nourritureJson.ingredients;
                            dessert.type = doc.data().nourritureJson.type;
                            dessert.availableQuantity = doc.data().nourritureJson.availableQuantity;
                            dessert.isAvailableOffMenu = doc.data().nourritureJson.isAvailableOffMenu;
                            dessert.imgUrl = doc.data().nourritureJson.imgUrl;
                            dessert.temp = doc.data().nourritureJson.temp;
                            dessert.id = doc.id;
                            resolve(dessert);
                        });
                    break;
                }
                default: {
                    console.log('Aucun type sélectionné');
                    reject();
                }
            }
        });
    }
    updateNourritureToDb(key, type, nourriture): Promise<any> {
        /*      nourriture.type = type;*/
        let nourritureJson = JSON.parse(JSON.stringify(nourriture));
        return new Promise((res, rej) => {
            this.cantineappdb
                .collection('Inventaire')
                .doc('Nourriture')
                .collection(type)
                .doc(key)
                .set({nourritureJson})
                .then(function () {
                    console.log('Document modifé !');
                    res();
                })
                .catch(function (error) {
                    rej();
                    this.handleError(error);
                });
        });
    }
    pushMenuToDb<Menu>(menu: Menu) {
        let menuJson = JSON.parse(JSON.stringify(menu));
        console.log(menuJson);
        return new Promise((res, rej) => {
            this.cantineappdb
                .collection('Inventaire')
                .doc('Menu')
                .collection('Menu')
                .add({ menuJson })
                .then(function() {
                    console.log('Menu ajouté !');
                    res();
                })
                .catch(function(error) {
                    rej();
                    this.handleError(error);
                });
        });
    }
    getMenuFromDb(currentDate): Promise<any> {
        /*      console.log(currentDate);*/
        this.menuCollection = this.cantineappdb
            .collection('Inventaire')
            .doc('Menu')
            .collection('Menu');
        return new Promise((resolve) => {
            this.menuCollection.ref
                .get().then(data => {
                let menuArray: Menu[] = [];
                data.docs.forEach(doc => {
                    let menu = new Menu('', [ new Date(), new Date() ], '', '', '', '', '');
                    doc.data().menuJson.date.forEach(function (element) {
                        if (element === currentDate) {
                            menu.name = doc.data().menuJson.name;
                            menu.entree = doc.data().menuJson.entree;
                            menu.plat = doc.data().menuJson.plat;
                            menu.dessert = doc.data().menuJson.dessert;
                            menu.boisson = doc.data().menuJson.boisson;
                            menu.date = doc.data().menuJson.date;
                            menu.price = doc.data().menuJson.price;
                            menu.id = doc.id;
                            menuArray.push(menu);
                        }
                    });
                });
                resolve(menuArray);
            });
        });
    }
    getOneMenuFromDb(key: string): Promise<any> {
        this.menuDocument = this.cantineappdb
            .collection('Inventaire')
            .doc('Menu')
            .collection('Menu')
            .doc(key);
        return new Promise((resolve) => {
            this.menuDocument.ref.get()
                .then((doc) => {
                    let menu = new Menu('', [ new Date(), new Date() ], '', '', '', '', '');
                    menu.name = doc.data().menuJson.name;
                    menu.entree = doc.data().menuJson.entree;
                    menu.plat = doc.data().menuJson.plat;
                    menu.dessert = doc.data().menuJson.dessert;
                    menu.boisson = doc.data().menuJson.boisson;
                    menu.date = doc.data().menuJson.date;
                    menu.price = doc.data().menuJson.price;
                    resolve(menu);
                });
        });
    }
    deleteMenu(key: string) {
        this.cantineappdb
            .collection('Inventaire')
            .doc('Menu')
            .collection('Menu')
            .doc(key)
            .delete()
            .then(function() {
                console.log('Document successfully deleted!');
            }).catch(function(error) {
            console.error('Error removing document: ', error);
        });
    }
    deleteNourriture(key, type) {
        this.cantineappdb
            .collection('Inventaire')
            .doc('Nourriture')
            .collection(type)
            .doc(key)
            .delete()
            .then(function() {
                console.log('Document successfully deleted!');
            }).catch(function(error) {
            console.error('Error removing document: ', error);
        });
    }
}
