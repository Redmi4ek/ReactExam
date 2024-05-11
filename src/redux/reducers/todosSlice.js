import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'wewew',
    title: 'asadad',
    isCompleted: false
  },
  {
    id: 'wew',
    title: 'asd',
    isCompleted: false
  },
  {
    id: 'wewe',
    title: 'aaaaaa',
    isCompleted: false
  }
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.title = newText;
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
