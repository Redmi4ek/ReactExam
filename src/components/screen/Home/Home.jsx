import React from "react";
import TodoItem from "./item/TodoItem.tsx";
import CreateTodoField from "./create-todo-field/CreateTodoField.tsx";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../../redux/reducers/todosSlice';
import { Link } from 'react-router-dom';
import Layout from "../../layout/Layout";

const Home = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (title) => {
    dispatch(addTodo({
      id: Date.now(),
      title,
      isCompleted: false
    }));
  };

  return (
    <Layout>
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>
      <Link className='text-1xl font-bold text-center mb-4' to="/weather">Go to Weather</Link>
      <Link className='text-1xl font-bold text-center mb-4' to="/calculator">Go to Calculator</Link>
      <Link className='text-1xl font-bold text-center mb-4' to="/game">Go to Game</Link>
      <Link className='text-1xl font-bold text-center mb-4' to="/color-picker">Go to Color</Link>

      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          changeTodo={() => dispatch(toggleTodo(todo.id))}
          deleteTodo={() => dispatch(deleteTodo(todo.id))}
          editTodo={(id, newText) => dispatch(editTodo({ id, newText }))} 
        />
      ))}
      <CreateTodoField addTodo={handleAddTodo} />
    </div>
    </Layout>
  )
}

export default Home;
