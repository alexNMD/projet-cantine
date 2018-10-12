import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  commandes = [
    new Commande(1,'Julien','11/10/2018', 7 ,['Sandwich poulet','prout']),
    new Commande(2,'Alan','11/10/2018',7 ,['Sandwich boeuf']),
    new Commande(3,'Dominique','11/10/2018',7 ,['Sandwich poulet']),
    new Commande(4,'Jean-Baptiste','12/10/2018',9 ,['Salade']),
    new Commande(5,'Alex','12/10/2018',7 ,['Sandwich poulet']),
    new Commande(6,'Greg','14/10/2018',7 ,['Cassoulet']),
    new Commande(7,'Sarah','14/10/2018',7 ,['Pate bolo']),
    new Commande(8,'Thomas','14/10/2018',6.5 ,['Haricots steack']),
  ]

  // idCommande = [1,2,3,4,5,6,7,8];
  // dates = ["11/10/2018","11/10/2018","11/10/2018","12/10/2018","13/10/2018","14/10/2018","14/10/2018","14/10/2018"];
  // clients = ["Julien","Alan","Dominique","Jean-Baptiste","Alex","Greg","Sarah","Thomas"];
  // panier = ["Sandwich poulet","Sandwich boeuf","Sandwich poulet","Sandwich Salade","Cassoulet","Pâte bolognaise","Sandwich poulet","Steack haricots"];

  constructor() { }

  ngOnInit() {
    console.log(this.commandes);
  }

}
