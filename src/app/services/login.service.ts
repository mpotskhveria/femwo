import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class LoginService{

    endpoint: string = 'https://dummyjson.com/auth/login'
    constructor( private http: HttpClient){}

    signIn(credentials:{username: string, pwd: string | number}) :Observable<any> {
        const headers = new HttpHeaders({
               'Content-Type':'application/json'
        })
        const body = {
            username: credentials.username,
            password: credentials.pwd
        }  
        return this.http.post<any>(this.endpoint, body, {headers})
    }

}