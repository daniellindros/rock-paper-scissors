import type { IRound } from './round';
import type { IPlayer } from './player';

export interface IGame {
  id: string;
  player1: IPlayer | null;
  player2: IPlayer | null;
  currentRound: IRound | null;
  finishedRounds: IRound[];
}
