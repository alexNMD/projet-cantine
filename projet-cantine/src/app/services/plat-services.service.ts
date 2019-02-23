import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plat } from '../plat';
import { Observable } from 'rxjs/index';
import { map, tap, catchError } from 'rxjs/internal/operators';
import { Plat } from "../../models/Plat";
import { Dessert } from "../../models/Dessert";
import { Snack } from "../../models/Snack";
import { Boisson } from "../../models/Boisson";
import { Entree } from "../../models/Entree";
import { Nourriture } from "../../models/supermodels/Nourriture";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class PlatServicesService {
  plat: Plat[];
  constructor(private http: HttpClient) { }

  // Récupération des plats depuis une requête
  getPlat(): Observable<Plat[]> {
      return this.http.get<Plat[]>
      ('https://food-for-fun-bdd.firebaseio.com/menu.json')
          .pipe(
              tap(data => data),
              catchError(this.handleError('getPlat', []))
          );
  }
  // Récupération d'un plat depuis une 'key'
  getPlatByKey(key: string): Observable<Plat[]> {
        console.log('https://food-for-fun-bdd.firebaseio.com/menu/' + key + '.json');
        return this.http.get<Plat[]>('https://food-for-fun-bdd.firebaseio.com/menu/' + key + '.json')
            .pipe(
                tap(data => JSON.stringify(data)),
                catchError(this.handleError('getPlatByKey', []))
            );
  }
  // Ajout de plat depuis un formulaire
  addPlat(plat: Plat): Observable<Plat> {
      const url = 'https://food-for-fun-bdd.firebaseio.com/menu.json';
      return this.http.post<Plat>(url, plat, {responseType: 'json'}).pipe(
          tap((product: Plat) => console.log('plat ajouté')),
          catchError(this.handleError<Plat>('addPlat')));
  }

  // Modification d'un plat depuis un formulaire
  editPlat(plat: Plat, key: string): Observable<Plat> {
      const url = `https://food-for-fun-bdd.firebaseio.com/menu/` + key + '.json';
      console.log(url);
      return this.http.put<Plat>(url, plat, {responseType: 'json'}).pipe(
          tap(data => JSON.stringify(data)),
          catchError(this.handleError<Plat>('editPlat')));
  }

  // Suppresion d'un plat depuis une 'key'
  deletePlat(key: string): Observable<Plat> {
        const url = 'https://food-for-fun-bdd.firebaseio.com/menu/' + key + '.json';
        return this.http.delete<Plat>(url)
            .pipe(
                tap(data => data),
                catchError(this.handleError<Plat>('deletePlat'))
            );
  }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return (error);
        };
    }
}
