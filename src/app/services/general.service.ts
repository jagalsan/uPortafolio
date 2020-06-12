import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  lightCheck: boolean;
  darkCheck: boolean;

  constructor(private title: Title, private meta: Meta) {
    let momentoActual = new Date();

    /**
     * Comprobamos si ya se ha elegido algun color para la web
     * De haberse escogido algun color mostramos la web de ese color
     * De no haberse escogido un color, comprobamos la hora actual y dependiendo de la hora mostraremos un color u otro
     * - De las 6 a las 19.59 -> Color Light
     * - De las 20.00 a las 5.59 -> Color Dark
     */

    if (localStorage.getItem('color')){
      if (localStorage.getItem('color') === 'dark'){
         this.darkCheck = true;
         this.lightCheck = false;
         this.changeColor('dark');
      }else{
         this.darkCheck = false;
         this.lightCheck = true;
         this.changeColor('light');
      }
   }else{

     if ( momentoActual.getHours() >= 6 && momentoActual.getHours() < 20 ){
      this.lightCheck = true;
      this.changeColor('light');
     }else if ( momentoActual.getHours() >= 20 || momentoActual.getHours() < 6 ){
      this.darkCheck = true;
      this.changeColor('dark');
     }

   }

   }

  /**
   * Datos de Copyright
   */

  COPYRIGHT = {
    copy : 'Jags',
    year : new Date().getFullYear()
  };

  /**
   * Datos del usuario
   */
  USUARIO = {
    nombre : 'Jose Alberto',
    apellidos: 'Galera Sánchez',
    email : 'jagalerasanchez@gmail.com',
    ciudad : 'Roquetas de Mar',
    provincia : 'Almería',
    cp: '04740',
    edad: this.getEdad(),
    web: 'www.developerjags.com'
  };

  /**
   * Redes sociales del usuario
   */

  REDES_SOCIALES = {
    twitter : 'https://twitter.com/jagalerasanchez',
    linkedin : 'https://www.linkedin.com/in/jose-alberto-galera-s%C3%A1nchez/',
    freelance : 'https://www.freelancer.es/u/jagalerasanchez',
    github : 'https://github.com/Unluucky04'
  };

  /**
   * Función que nos permitira cambiar el color de la web
   * @param tipo string -  Color al que queremos cambiar la web (light/dark).
   */

  changeColor(tipo: string){
    if (tipo === 'dark' ){
      localStorage.setItem('color', 'dark');
      this.lightCheck = false;
      this.darkCheck = true;
    }else{
      localStorage.setItem('color', 'light');
      this.darkCheck = false;
      this.lightCheck = true;
    }
  }

  /**
   * Función que nos permitira realizar el scroll al elemento clickado.
   * @param idElement string - id del elemento al que queremos navegar.
   */

  scroll( idElement: string ) {
    let el = document.getElementById(idElement);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /**
   * Función que nos indicara si la persona esta disponible para trabajar.
   */

  getDisponibilidad(){
    let momentoActual = new Date();
    if (momentoActual.getDay() < 6 && momentoActual.getHours() > 14 && momentoActual.getHours() < 20) {
      return 'Disponible';
    }

  }

  /**
   * Función que nos devolvera la edad actual de la persona
   */

  getEdad(){
    let añoActual = new Date();
    let edad;
    let mesNacimiento = 12;
    let añoNacimiento = 1999;
    let diaNacimiento = 17;

    if (añoActual.getMonth() + 1 >= 12 && añoActual.getDate() >= 17){

      return añoActual.getFullYear() - añoNacimiento;

    }else{
      return añoActual.getFullYear() - 1 - añoNacimiento;
    }

  }


  addSeo(){
    this.title.setTitle('Developer Jags ◾ Web Developer');
    this.meta.addTags([
      { name: 'twitter:site', content: '@jagalerasanchez' },
      { name: 'twitter:description', content: 'Desarrollador web en Roquetas de Mar con mas de 4años de experiencia, titulado y experimentado.' },
      { name: 'keywords', content: 'Jose Alberto Galera Sánchez,Jose Alberto,Jose Alberto Galera,Desarrollador web Roquetas de mar, Desarrollador web Roquetas, Programador Roquetas de Mar, Desarrollador web, Freelance Roquetas de Mar, Freelance Almería, Desarrollador Web Almería, Programador Almería'},
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Desarrollador web en Roquetas de Mar! ◾ + 4 años de experiencia ◾ Titulado ◾ Informes desglosados ◾ Roquetas de Mar - Almería ' },
      { name: 'geo.region', content: 'ES-AN' },
      { name: 'geo.placename', content: 'Almería' },
    ]);
  }
}
