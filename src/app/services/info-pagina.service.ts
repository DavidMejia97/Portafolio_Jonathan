import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;
  equipo : any = {};
  certificado : any = {};

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
    this.cargarCertificados();

   }

   private cargarInfo(){

    console.log('servicio de pagina cargado')

      // leer el archivo JSON 

      this.http.get('assets/data/data-pagina.json')

      .subscribe( resp => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
   }

  private cargarEquipo(){

    console.log ('servicio de equipo esta activo');

    /* this.http.get('https://angular-portafolio-9d612-default-rtdb.firebaseio.com/equipo.json') */

    this.http.get('https://bd-jonathan-default-rtdb.firebaseio.com/informacion.json')
    
    .subscribe(resp => {

      
      this.equipo = resp;
      console.log(resp);
    
    
    })
  }

    private cargarCertificados(){

      console.log ('servicio de certificados esta activo');
  
      /* this.http.get('https://angular-portafolio-9d612-default-rtdb.firebaseio.com/equipo.json') */
  
      this.http.get('https://bd-jonathan-default-rtdb.firebaseio.com/certificados.json')
      
      .subscribe(resp => {
  
        
        this.certificado = resp;
        console.log(resp);
      
      
      })
  


   } 
}
