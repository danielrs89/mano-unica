import { Injectable } from '@angular/core';
import Player from '../models/Player';

@Injectable({
  providedIn: 'root',
})
export class ManoTresService {
  playerList: Player;
  computerList: Player;
  finalizar: boolean = false;

  constructor() {
    this.playerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.computerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
  }

  comienzaJuego(id: number) {
    this.playerList.id_mano = id;
    this.playerList.icono = this.getIconoMano(id);
    this.playerList.mano = this.getNombreMano(id);

    this.randonMano(3, 1); // genera la mano de la IA
    this.comprobarGanador(this.playerList.id_mano, this.computerList.id_mano);
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
        return 'piedra';
      case 2:
        return 'papel';
      case 3:
        return 'tijera';
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
    if (playerId === computerId) return; // Empate

    const ganaJugador =
      (playerId === 1 && computerId === 3) ||
      (playerId === 2 && computerId === 1) ||
      (playerId === 3 && computerId === 2);

    if (ganaJugador) {
      this.playerList.puntos += 1;
    } else {
      this.computerList.puntos += 1;
    }
  }

  finPartida(finalizar: boolean) {
    if (finalizar) {
      if (this.playerList.puntos > this.computerList.puntos) {
        alert(
          `Has ganado con ${this.playerList.puntos} puntos. IA tiene ${this.computerList.puntos} puntos.`
        );
      } else if (this.playerList.puntos < this.computerList.puntos) {
        alert(
          `Has perdido con ${this.playerList.puntos} puntos. IA tiene ${this.computerList.puntos} puntos.`
        );
      } else {
        alert(`Empate con ${this.playerList.puntos} puntos.`);
      }
      this.reiniciar(); // Solo una vez
    }

    // Reset de manos para próxima ronda
    // this.playerList.id_mano = 0;
    // this.playerList.mano = '';
    // this.playerList.icono = '';
    // this.computerList.id_mano = 0;
    // this.computerList.mano = '';
    // this.computerList.icono = '';
  }

  reiniciar() {
    this.playerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.computerList = { mano: '', icono: '', id_mano: 0, puntos: 0 };
    this.finalizar = false;
  }
}
