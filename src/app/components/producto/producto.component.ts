import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import {MatBadgeModule} from '@angular/material/badge';
import { GeneralService } from '../../services/general.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PortafolioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public servicioGeneral: GeneralService ) {}

  /**
   * Función que nos permitira cerrar la información del proyecto
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }


}
