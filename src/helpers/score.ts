import type { IFinishedRound } from './../types/round';
import type { IPlayer } from './../types/player';
import { EMove } from './../types/move';

export const winningMove = {
  [EMove.Rock]: EMove.Paper,
  [EMove.Paper]: EMove.Scissors,
  [EMove.Scissors]: EMove.Rock,
};

export const getRoundWinner = (
  round: IFinishedRound,
  player1: IPlayer,
  player2: IPlayer
): IPlayer | null => {
  if (round.player1Move === round.player2Move) {
    return null; // draw
  }
  return round.player1Move === winningMove[round.player2Move]
    ? player1
    : player2;
};

export const getPlayerScores = (
  finishedRounds: IFinishedRound[],
  player1: IPlayer,
  player2: IPlayer
): number[] => {
  return finishedRounds.reduce(
    (acc, finishedRound) => {
      const roundWinner = getRoundWinner(finishedRound, player1, player2);
      if (roundWinner === player1) {
        acc[0] += 1;
      } else if (roundWinner === player2) {
        acc[1] += 1;
      }
      return acc;
    },
    [0, 0]
  );
};
