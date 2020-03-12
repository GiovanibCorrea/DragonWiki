import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})

export class DragonService {

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // Obtém a lista de dragões
  getDragonsList() {
    var urlService = String(this.urlService.getDragonUrl());
    return this.http.get<any>(urlService).pipe(
      tap(async (result: any) => { })
    );
  }

  // Obtém um dragão por ID -> Visualizar/Editar
  getDragonById(id: any) {
    var urlService = String(this.urlService.getDragonUrl() + '/' + id);
    return this.http.get<any>(urlService).pipe(
      tap(async (result: any) => { })
    );
  }

  // Cadastra novo dragão
  addDragon(form: any): Observable<any> {
    var urlService = String(this.urlService.getDragonUrl());
    return this.http.post<any>(urlService, form).pipe(
      tap((result: any) => console.log('added dragon!')),
      catchError(this.handleError<any>('addDragon'))
    );
  }

  // Atualiza dragão
  updateDragon(id: any, form: any) {
    var urlService = String(this.urlService.getDragonUrl() + '/' + id);
    return this.http.put<any>(urlService, form).pipe(
      tap(_ => console.log(`updated dragon!`)),
      catchError(this.handleError<any>('updateDragon'))
    );
  }

  // Excluir dragão
  deleteDragon(id: any) {
    var urlService = String(this.urlService.getDragonUrl() + '/' + id);
    return this.http.delete(urlService).pipe(
      tap(_ => console.log(`deleted dragon!`)),
      catchError(this.handleError<any>('deleteDragon'))
    );
  }

}
