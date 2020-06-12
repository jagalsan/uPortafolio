import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';


const routes: Routes = [
  {path: 'portafolio', component: PortafolioComponent},
  {path: '**' , pathMatch: 'full', redirectTo: '/portafolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
