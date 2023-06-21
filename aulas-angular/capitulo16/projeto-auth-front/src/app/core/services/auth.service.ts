import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  public sign(payload: { email: string, password: string }): Observable<any>{
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((error) => {
        if(error.error.message){
          return throwError(() => error.error.message);
        }
        return throwError(() => "Serviço indisponível, tente mais tarde.");
      })
    );
  }

  public signOut(){
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }
}
