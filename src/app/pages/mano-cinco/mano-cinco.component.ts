import { Component } from '@angular/core';
import { ManoCincoService } from '../../services/mano-cinco.service';

@Component({
  selector: 'app-mano-cinco',
  imports: [],
  templateUrl: './mano-cinco.component.html',
  styleUrl: './mano-cinco.component.css',
})
export class ManoCincoComponent {
  constructor(public manoCincoService:ManoCincoService) {}
}
