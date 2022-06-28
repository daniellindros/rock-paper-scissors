export enum EMove {
  Rock = 'ROCK',
  Paper = 'PAPER',
  Scissors = 'SCISSOR',
}

export interface IPlayerMove {
  playerId: string;
  move: EMove;
}
