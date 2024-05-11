import React, {useState, useEffect} from 'react'
import Check from './Check'
import { BsTrash, BsPencil} from 'react-icons/bs'
import axios from 'axios';

interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}
interface Props {
    todo: Todo;
    changeTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo , changeTodo, deleteTodo, editTodo  }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.title);
    const [imageUrl, setImageUrl] = useState("");
    interface CatImage {
        url: string;
    }

    useEffect(() => {
        axios.get<CatImage[]>( 
          "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
        )
          .then(response => {
            setImageUrl(response.data[0].url); 
          })
          .catch(error => {
            console.error("Error fetching image:", error);
          });
    }, []);
      


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.title); // Вернем исходный текст при отмене редактирования
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") { // Проверка на пустую строку
      editTodo(todo.id, editedText.trim());
      setIsEditing(false);
    }
  };
  
  return (
        <div className='mb-2'>
        {!isEditing ? (
            <div className={`flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md ${todo.isCompleted ? 'line-through' : ''}`}>
                <div onClick={() => changeTodo(todo.id)} className='cursor-pointer'>
                    <Check isCompleted={todo.isCompleted} />
                    <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
                    {imageUrl && <img className="w-9 h-6" src={imageUrl} alt="Random cat" />}
                </div>
                <div>
                    <button onClick={handleEdit} className='text-blue-500 mr-2'>
                        <BsPencil />
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className='text-red-500'>
                        <BsTrash />
                    </button>
                </div>
            </div>
        ) : (
            <div className='flex items-center justify-between bg-gray-800 px-1 py-4 rounded-md'>
                <input
                    type='text'
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={handleSaveEdit}
                    className='bg-transparent w-full border-none outline-none text-white'
                />
                <div>
                    <button onClick={handleSaveEdit} className='text-green-500 mr-2'>
                        <BsPencil />
                    </button>
                    <button onClick={handleCancelEdit} className='text-red-500'>
                        <BsTrash />
                    </button>
                </div>
            </div>
        )}
        </div>
);
};


export default TodoItem