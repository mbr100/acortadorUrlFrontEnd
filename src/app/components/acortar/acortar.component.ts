import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UrlService} from '../../services/url.service';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-acortar',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="mb-0">Acortar URL</h2>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <input [(ngModel)]="urlLarga" class="form-control" placeholder="Ingrese la URL a acortar">
                </div>
                <button (click)="acortarUrl()" class="btn btn-primary">Acortar</button>
                <div *ngIf="urlCorta" class="mt-3 alert alert-success url-result">
                    <strong>URL acortada:</strong> {{ urlCorta }}
                </div>
            </div>
        </div>
    `,
})
export class AcortarComponent {
    urlLarga = '';
    urlCorta = '';

    constructor(private urlService: UrlService) {
    }

    acortarUrl() {
        if (this.urlLarga) {
            this.urlService.acortarUrl(this.urlLarga).subscribe({
                next: (respuesta:any) => {
                    console.log('URL acortada:', respuesta);
                    this.urlCorta = respuesta.urlCorta;
                    },
                error: (error) => {
                    console.error('Error al acortar la URL', error);
                    },
                }
            );
        }
    }
}
