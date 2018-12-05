import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plat } from '../plat';
import { Observable } from 'rxjs/index';
import { map, tap, catchError } from 'rxjs/internal/operators';

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
      ('https://food-for-fun-bdd.firebaseio.com/food-for-fun-bdd.json')
          .pipe(
              tap(data => data),
              catchError(this.handleError('getPlat', []))
          );
  }
  // Ajout de plat depuis un formulaire
  addPlat(obj) {
      let plat = new Plat(obj.name, obj.price, obj.type_dish, obj.temp, obj.ingredients, obj.image, obj.date);
      this.http
          .post('https://food-for-fun-bdd.firebaseio.com/food-for-fun-bdd.json', plat, httpOptions)
          .subscribe(
              () => {
                  console.log('ça marche');
              });
  }
  // Modification d'un plat depuis un formulaire
  updatePlat() {}

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
