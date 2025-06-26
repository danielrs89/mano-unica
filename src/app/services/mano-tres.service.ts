import { Injectable } from '@angular/core';
import Player from '../models/Player';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root',
})
export class ManoTresService {
  playerList: Player;
  computerList: Player;
  finalizar: boolean = false;
  mensajeResultado: string = '';
  ronda: number = 0;
  historial: string[] = [];

  constructor(private route: Router) {
    this.playerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.computerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
  }

  comienzaJuego(id: number) {
    this.playerList.id_mano = id;
    this.playerList.icono = this.getIconoMano(id);
    this.playerList.mano = this.getNombreMano(id);

    this.randonMano(3, 1); // genera la mano de la IA
    this.comprobarGanador(this.playerList.id_mano, this.computerList.id_mano);

    this.ronda += 1;

    this.historial.push(
      `Ronda ${this.ronda}: Tú - ${this.playerList.mano} ${this.playerList.icono} | IA - ${this.computerList.mano} ${this.computerList.icono} => ${this.mensajeResultado}`
    );

    this.finPartida(this.finalizar);
  }

  randonMano(max: number, min: number) {
    const idRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    const nombre = this.getNombreMano(idRandom);
    const icono = this.getIconoMano(idRandom);
    this.computerList.id_mano = idRandom;
    this.computerList.mano = nombre;
    this.computerList.icono = icono;
  }

  getNombreMano(id: number): string {
    switch (id) {
      case 1:
        return 'Piedra';
      case 2:
        return 'Papel';
      case 3:
        return 'Tijera';
      default:
        return '';
    }
  }
  getIconoMano(id: number): string {
    switch (id) {
      case 1:
        return '🗿';
      case 2:
        return '📃';
      case 3:
        return '✂️';
      default:
        return '';
    }
  }

  comprobarGanador(playerId: number, computerId: number) {
    if (playerId === computerId) {
      this.mensajeResultado = '¡Empate!';
      return;
    }

    const ganaJugador =
      (playerId === 1 && computerId === 3) ||
      (playerId === 2 && computerId === 1) ||
      (playerId === 3 && computerId === 2);

    if (ganaJugador) {
      this.playerList.puntos += 1;
      this.mensajeResultado = '¡Has ganado la ronda!';
    } else {
      this.computerList.puntos += 1;
      this.mensajeResultado = 'Has perdido la ronda.';
    }
  }

  finPartida(finalizar: boolean) {
    if (finalizar) {
      let mensaje = '';
      let tipo: 'success' | 'danger' | 'info' = 'info';

      if (this.playerList.puntos > this.computerList.puntos) {
        mensaje = `Has ganado con ${this.playerList.puntos} puntos. IA tiene ${this.computerList.puntos} puntos.`;
        tipo = 'success';
      } else if (this.playerList.puntos < this.computerList.puntos) {
        mensaje = `Has perdido con ${this.playerList.puntos} puntos. IA tiene ${this.computerList.puntos} puntos.`;
        tipo = 'danger';
      } else {
        mensaje = `Empate con ${this.playerList.puntos} puntos.`;
        tipo = 'info';
      }

      this.showToast(mensaje, tipo);
      // Esperar 3 segundos (3000 milisegundos)
      setTimeout(() => {
        this.reiniciar();
        this.route.navigate(['/']);
      }, 3000);
    }
  }
  showToast(
    mensaje: string,
    tipo: 'success' | 'danger' | 'warning' | 'info' = 'info'
  ) {
    const toastEl = document.getElementById('gameToast');
    const toastBody = document.getElementById('gameToastBody');

    if (toastBody && toastEl) {
      toastBody.innerText = mensaje;

      toastEl.classList.remove(
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info'
      );
      toastEl.classList.add(`bg-${tipo}`);

      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  reiniciar() {
    this.playerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.computerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.historial = [];
    this.ronda = 0;
    this.finalizar = false;
  }
}
