import "../styles/App.css";

import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import UserTodos from "./UserTodos";

function App() {

  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [todos, setTodos] = useState([]);

  //llamda auna fuente de datos externa
  useEffect(() => {
    const getData = async () => {
      //consultamso informaiconde usuario
      const response = await fetch(
          ` https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const info = await response.json();
      setUserInfo(info);

      //lisat de tareas
      const responseTodos = await fetch(
          ` https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );

      const todosData = await responseTodos.json();
      setTodos(todosData);
    };

    getData();
  }, [userId]);


  const hanleChangeCounter = (value) => {
    setUserId((prevState) => prevState + value);
  };

  const handleCompleted = (position) => {
    const newTodos = [...todos];
    newTodos[position].completed = true;
    setTodos(newTodos);
  };

  const handleDelete = (position) => {
    const newTodos = todos.filter((todo, index) => index !== position);
    setTodos(newTodos);
  };

  if (!userInfo) {
    return "carganbdo datos tarea todolist";
  }

  return (
      <div>
        <div>
          {userId > 1 && (
              <button onClick={() => hanleChangeCounter(-1)}>Anterio usuari</button>
          )}
          {userId < 10 && (
              <button onClick={() => hanleChangeCounter(1)}>
                Siguiente usuario
              </button>
          )}

        </div>

        <UserInfo user ={userInfo}/>
        <UserTodos todos ={todos}
                   onCompleted ={handleCompleted}
                    onDelete = {handleDelete}/>


      </div>
  );
}

export default App;
