import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { UrlService } from '../../services/url.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-obtener-url-original',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './obtener-url-original.component.html',
    styleUrls: ['./obtener-url-original.component.css']
})
export class ObtenerUrlOriginalComponent implements OnInit {
    public urlLarga = '';
    public sePuedeRedirigir = false;
    private uuid: string = '';

    constructor(private urlService: UrlService, private route: ActivatedRoute, private router:Router) {}

    ngOnInit(): void {
        this.uuid = this.route.snapshot.params['uuid'];
        if (this.uuid) {
            this.obtenerUrlOriginal();
        } else {
            this.router.navigate(['/']).then(_ => console.log('Redirigido a la página principal'));
        }
    }

    private obtenerUrlOriginal(): void {
        this.urlService.obtenerUrlOriginal(this.uuid).subscribe({
            next: (response: any) => {
                this.urlLarga = response.url;
                this.sePuedeRedirigir = true;
            },
            error: (error) => {
                console.error('Error al obtener la URL original', error);
            }
        });
    }

    public redirigir(): void {
        if (this.urlLarga) {
            window.location.href = this.urlLarga;
        }
    }
}
