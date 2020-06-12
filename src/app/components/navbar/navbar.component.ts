import { Component, OnInit, Input, ViewChild, Output, EventEmitter, HostListener } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { PortafolioComponent } from '../portafolio/portafolio.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  esPortafolio: boolean; // Variable que se utilizara para hacer el scroll

  constructor(public servicioGeneral: GeneralService) {

    /**
     * Comprobación si estamos en la home, de no estar en la home cambiaremos la variable esPortafolio a false.
     */
    if (location.pathname === '/portafolio'){
     this.esPortafolio = true;
    }else{
      this.esPortafolio = false;
    }

   }




   ngOnInit() {
    }

    /**
     * Funcion scroll, se utilizara para hacer scroll al elemento del menu clickado.
     * @param id - Tipo string id del elemento al que queremos ir.
     * @param e - Tipo element , se utilizara para no recargar la pagina al hacer click.
     */

    scroll(id, e) {

      /**
       * Si no estamos en el home, retornaremos nada.
       */
      if (!this.esPortafolio){
        return;
      }

      this.servicioGeneral.scroll(id);
      e.preventDefault();
    }


  }
