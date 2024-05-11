import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  secretNumber: Math.floor(Math.random() * 100) + 1,
  guesses: [],
  message: 'Начни угадывать!',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeGuess: (state, action) => {
      state.guesses.push(action.payload);
      if (action.payload === state.secretNumber) {
        state.message = 'Поздравляю! Ты угадал!';
      } else if (action.payload < state.secretNumber) {
        state.message = 'Загаданное число больше.';
      } else {
        state.message = 'Загаданное число меньше.';
      }
    },
    resetGame: (state) => {
      state.secretNumber = Math.floor(Math.random() * 100) + 1;
      state.guesses = [];
      state.message = 'Начни угадывать!';
    },
  },
});

export const { makeGuess, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
