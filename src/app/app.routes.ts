import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ManoTresComponent } from './pages/mano-tres/mano-tres.component';
import { ManoCincoComponent } from './pages/mano-cinco/mano-cinco.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
  { path: 'tres', component: ManoTresComponent },
  { path: 'cinco', component: ManoCincoComponent },
];
