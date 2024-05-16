import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, todo: "리액트 공부하기"},

  ];
  const [users, setUsers] = useState(initialState);
  const [todo, setTodo] = useState('');
  

  const addUser = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("할 일을 먼저 작성해주세요");
      return;
    }

    const newUser = {
      id: Date.now(),
      todo: todo,

    };

    setUsers([...users, newUser]);
    setTodo('');

    
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);

  };

  return (
    <>
      <h1>투두 리스트</h1>
      <form onSubmit={addUser}>
        <input type="text" placeholder="해야 할 일을 작성해 주세요" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        
        <button type="submit">해야할 일 추가</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.todo}
          <button onClick={() => removeUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
