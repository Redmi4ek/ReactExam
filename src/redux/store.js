import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';
import calculatorReducer from './calculatorSlice.ts'; // Добавьте импорт
import gameReducer from './GameSlice.js';
import colorReducer from './colorReducer.js';



const store = configureStore({
  reducer: {
    todos: todosReducer,
    calculator: calculatorReducer,
    game: gameReducer,
    color: colorReducer
  },
});

export default store;
