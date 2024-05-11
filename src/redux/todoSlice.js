import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: new Date().getTime(), // Generate unique ID
        title: action.payload.title,
        completed: false,
      });
    },
    toggleTodoCompleted: (state, action) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload.id);
      state[todoIndex].completed = !state[todoIndex].completed;
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.title = newTitle;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodoCompleted, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
