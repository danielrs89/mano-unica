import { Component } from '@angular/core';
import { ManoTresService } from '../../services/mano-tres.service';

@Component({
  selector: 'app-mano-tres',
  imports: [],
  templateUrl: './mano-tres.component.html',
  styleUrl: './mano-tres.component.css',
})
export class ManoTresComponent {
  constructor(public manoTresService: ManoTresService) {}
}
