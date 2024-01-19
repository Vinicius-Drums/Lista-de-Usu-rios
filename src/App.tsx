// App.tsx
import React from "react";
import UserList from "./components/Userlist";
import "./App.css";
import ListausuarioImage from "./imagens/Listausuário.png";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Lista de Usuários</h1>
      <img
        src={ListausuarioImage}
        alt="Lista de Usuários"
        className="user-list-image"
      />
      <UserList />
    </div>
  );
};

export default App;
