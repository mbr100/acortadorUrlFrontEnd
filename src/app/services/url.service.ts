import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    public acortarUrl(url: string): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/obtenerUrlCorta`, {url});
    }

    public obtenerUrlOriginal(uuid: string): Observable<string> {
        return this.http.get<string>(`${this.apiUrl}/obtenerUrlOriginal/`+uuid);
    }
}
