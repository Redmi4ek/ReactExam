import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../../../redux/reducers/todosSlice';

interface AddTodo {
  id: string;
  title: string;
  isCompleted: boolean;
}


const CreateTodoField: React.FC<AddTodo> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title.trim() !== '') {
      dispatch(addTodo({
        id: uuidv4(),
        title: title.trim(),
        isCompleted: false,
      }));
      setTitle('');
    }
  };

  return (
    <div className=' flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'>
      <input 
        type="text" 
        onChange={e => setTitle(e.target.value)} 
        value={title}
        onKeyPress={e => e.key === 'Enter' && handleAddTodo()}
        className=' bg-transparent w-full border-none
          outline-none'
        placeholder='Add tasks'
      />
    </div>
  );
}

export default CreateTodoField;
