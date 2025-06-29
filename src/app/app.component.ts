import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManoTresService } from './services/mano-tres.service';
import { ManoCincoService } from './services/mano-cinco.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    public manoTresService: ManoTresService,
    public manoCincoService: ManoCincoService
  ) {}
}
