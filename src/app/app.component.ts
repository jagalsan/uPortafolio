import { Component } from '@angular/core';
import * as AOS from 'aos';

import 'aos/dist/aos.css';
import { GeneralService } from './services/general.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Titulo del sitio
   */

  TITTLE = 'uPortafolio';

  constructor(){
  console.clear();
  }

}
