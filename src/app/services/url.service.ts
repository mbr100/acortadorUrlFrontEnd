import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    private apiUrl: string = environment.apiUrl;
    private ACORTAR_URL: string = environment.acortarUrl;
    private URL_ORIGINAL: string = environment.obtenerUrlOriginal;

    constructor(private http: HttpClient) { }

    public acortarUrl(url: string): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}${this.ACORTAR_URL}`, {url});
    }

    public obtenerUrlOriginal(uuid: string): Observable<string> {
        return this.http.get<string>(`${this.apiUrl}${this.URL_ORIGINAL}/`+ uuid);
    }
}
