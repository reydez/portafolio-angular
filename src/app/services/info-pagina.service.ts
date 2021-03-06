import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoAbout } from '../interfaces/info-about.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: InfoAbout[] = [];

  constructor(private http: HttpClient) { 
    
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-8a7a1.firebaseio.com/equipo.json').subscribe( (resp: InfoAbout[]) => {
      this.equipo = resp;
    });
  }

}
