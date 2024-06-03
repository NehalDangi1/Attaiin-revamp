import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(
        private http: HttpClient
    ) {
        localStorage.setItem('attaiinToken', '');
        localStorage.setItem('attaiinRefreshToken', '');
        window.localStorage.removeItem('userName')
        window.localStorage.removeItem('email')
    }

    getToken(): string | null {
        return localStorage.getItem('attaiinToken');
    }


    loginUser(body: any) {
        return this.http.post('https://beta-app.attaiin.com/api/Authentication/login-user', body)
    }

    userProfile() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };

        return this.http.get('https://beta-app.attaiin.com/api/UserManagement/v3/profile', httpOptions);
    }

    getDashBoardData() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };
        return this.http.get('https://beta-app.attaiin.com/api/Dashboard/v3/GetUserDashboard', httpOptions)
    }

}