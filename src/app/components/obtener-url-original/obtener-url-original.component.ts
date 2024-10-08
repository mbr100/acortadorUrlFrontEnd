import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {UrlService} from '../../services/url.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-obtener-url-original',
  standalone: true,
    imports: [
        FormsModule,
        NgIf
    ],
  templateUrl: './obtener-url-original.component.html',
  styleUrl: './obtener-url-original.component.css'
})
export class ObtenerUrlOriginalComponent implements OnInit {
    private uuid: string = '';
    public urlLarga: string;
    public sePuedeRedirigir: boolean;

    public constructor(private urlService: UrlService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.uuid = params['uuid'];
        });
        this.urlLarga = '';
        this.sePuedeRedirigir = false;
    }

    public ngOnInit() {
        console.log('UUID:', this.uuid);
        this.obtenerUrlOriginal();
    }

    private obtenerUrlOriginal() {
        if (this.uuid) {
            this.urlService.obtenerUrlOriginal(this.uuid).subscribe({
                    next: (response: any) => {
                        console.log('URL original:', response);
                        this.urlLarga = response.url;
                        this.sePuedeRedirigir = true;
                    },
                    error: (error) => {
                        console.error('Error al obtener la URL original', error);
                    },
                    complete: () => {
                        console.log('Petición completada');
                        this.sePuedeRedirigir = true;
                    }
                }
            );
        }
    }

    redirigir() {
        if (this.urlLarga) {
            window.location.href = this.urlLarga;
        }
    }
}
