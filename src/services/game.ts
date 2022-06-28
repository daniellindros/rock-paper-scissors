import type { IRound } from './../types/round';
import type { IPlayer } from './../types/player';
import { EMove } from './../types/move';
import type { IPlayerMove } from './../types/move';
import type { IGame } from './../types/game';
import axios from 'axios';

const API_URL = 'https://rps-api-ujymak7y3a-ew.a.run.app';

export const getGames = async (): Promise<IGame[] | undefined> => {
  try {
    const response = await axios(`${API_URL}/games`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getGame = async (id: string): Promise<IGame | undefined> => {
  try {
    const response = await axios(`${API_URL}/games/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getRound = (): IRound => {
  return {
    id: 'ac265723-3eff-48cb-bbeb-04baf4b6eb28',
    player1Move: EMove.Rock,
    player2Move: EMove.Paper,
  };
};

export const createGame = async (): Promise<IGame> => {
  try {
    const response = await axios.post(`${API_URL}/games`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addPlayer = async (
  name: string,
  gameId: string
): Promise<IPlayer> => {
  try {
    const response = await axios.post(`${API_URL}/games/${gameId}/addPlayer`, {
      name,
    });
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const doMove = async (
  gameId: string,
  move: IPlayerMove
): Promise<IPlayer> => {
  try {
    const response = await axios.post(
      `${API_URL}/games/${gameId}/doMove`,
      move
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
