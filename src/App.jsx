import  { useState } from 'react';
import './App.css'

const TodoWriteForm =({newTodoTitle, setNewTodoTitle, addTodo}) => {
  return (
    
      <div>
        <input type = 'text' 
      placeholder= "할 일을 입력해주세요."
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        &nbsp;&nbsp;
        <button onClick={addTodo}>할 일 추가</button>
      </div>

  )
}

const TodoListItem = ({ todo, todos, index, setTodos }) => {
  console.log(`index : ${index}`);

  const removeTodo = () => {
    const newTodos = todos.filter((_, exindex) => index !== exindex);
    setTodos(newTodos);
  };
  
  return (
    <li>
    {index + 1}. &nbsp;
    {todo}
    &nbsp; 
    <button onClick={removeTodo}>삭제</button>
    </li>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) =>  (
          <TodoListItem 
          key={index}
          index={index} 
          todo={todo} 
          todos={setTodos} 
          setTodos={setTodos}/>
      ))}
     </ul>
    </div>
  )
}
const App = () => {
   const [newTodoTitle, setNewTodoTitle] = useState('');
   const [todos, setTodos] = useState([]);

   const addTodo = () => {
    if (newTodoTitle.trim().length == 0) return;

    setTodos([...todos, newTodoTitle.trim()]);
    setNewTodoTitle('');
   };

   return (
    <>
     <TodoWriteForm 
       newTodoTitle={newTodoTitle}
       setNewTodoTitle={setNewTodoTitle} 
       addTodo={addTodo} />
        <hr />
        <TodoList todos={todos} setTodos={setTodos} />
    </>
   )
  }


export default App;
