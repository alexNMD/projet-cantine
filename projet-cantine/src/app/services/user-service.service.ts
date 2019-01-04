import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map, tap, catchError } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	constructor(private http: HttpClient) { }

	getUsers(){
		return this.http.get<Object>
      ('https://food-for-fun-bdd.firebaseio.com/users.json')
          .pipe(
              tap(data => data),
              catchError(this.handleError('getPlat', []))
          );
	}

	existInDB(email: string, mdp: string){

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
