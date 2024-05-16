import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, todo: "리액트 공부하기"},

  ];
  const [users, setUsers] = useState(initialState);
  // TODO: 이름과 나이를 각각 상태로 정의하세요.
  const [todo, setTodo] = useState('');
  

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!todo) {
      alert("할 일을 먼저 작성해주세요");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.

    const newUser = {
      id: Date.now(),
      todo: todo,

    };

    setUsers([...users, newUser]);
    setTodo('');

    
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용하여 사용자 삭제 로직을 구현해보세요.
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);

  };

  return (
    <>
      <h1>투두 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="해야 할 일을 작성해 주세요" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        
        <button type="submit">해야할 일 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
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
