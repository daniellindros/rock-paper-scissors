import type { EMove } from './move';

export interface IRound {
  id: string;
  player1Move: EMove | null;
  player2Move: EMove | null;
}

export interface IFinishedRound {
  id: string;
  player1Move: EMove;
  player2Move: EMove;
}
