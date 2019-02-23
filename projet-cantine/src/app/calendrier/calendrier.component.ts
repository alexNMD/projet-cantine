import {Component, Input, OnInit} from '@angular/core';
import { Plat } from '../plat';
import {InventoryService} from '../services/inventory.service';
import {Menu} from '../../models/Menu';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  data: Plat[];
  dataToDisplay : Plat[];

  currentDate: Date = new Date();

  constructor(private Inventory: InventoryService) { }
    menus: Menu[];
    imgMenuArray: string[] = [];
    menuToDisplay: Object = {};
    user: Object = {};
    today = new Date();
    currentDate = this.formatDate(this.today);

  ngOnInit() {
      this.getMenuArray(this.currentDate);
      /*this.user = JSON.parse(localStorage.getItem("user"));*/
  }

    formatDate(date) {
        let YYYY = date.getFullYear();
        let MM = date.getMonth() + 1;
        let DD = date.getDate();
        if (MM < 10) {
            MM = '0' + MM;
        }
        if (DD < 10) {
            DD = '0' + DD;
        }
        return YYYY + '-' + MM + '-' + DD;
    }
    previousMenu() {
        this.slides.slidePrev();
    }
    nextMenu() {
        this.slides.slideNext();
    }
    changeDate() {
        console.log(this.currentDate);
        /*this.currentDate = new Date(this.currentDate);*/
        this.getMenuArray(this.currentDate);
    }
    /*getTodayDate() {
        let currentDate = this.formatDate(new Date());
        let currentISODate = currentDate.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
    }*/
    getMenuArray(currentDate) {
        this.menus = [];
        this.Inventory.getMenuFromDb(currentDate).then((data: Menu[]) => {
            data.forEach(menu => {
                this.Inventory.getOneNourritureFromDb("Plats", menu.plat).then(plat => {
                    menu.imgUrl = plat.imgUrl;
                    this.menus = data;
                });
            });
        });
    }
    async deleteMenu(key) {
        const alert = await this.alertController.create({
            header: "Etes vous sûr ?!",
            message: "Voulez vous supprimer ce <strong>menu</strong> ?",
            buttons: [
                {
                    text: "Non",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: blah => {
                        console.log("Confirm Cancel: blah");
                    }
                },
                {
                    text: "Oui",
                    handler: () => {
                        this.Inventory.deleteMenu(key);
                        console.log("Confirm Okay");
                        this.ngOnInit();
                    }
                }
            ]
        });

        await alert.present();
    }
    async presentToast(message) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
    addMenuToPanier(menu: Menu) {
        this.panierService.addMenuToPanier(menu).then(() => {
            this.presentToast('Menu ajouté au panier !');
        }).catch(() => {
            this.presentToast('Impossible d\'ajouter au panier');
        });
    }
}
