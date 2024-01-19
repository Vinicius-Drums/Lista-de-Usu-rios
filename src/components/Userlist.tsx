// UserList.tsx
import React, { useState } from "react";

// Definindo a interface para o objeto de usuário
interface User {
  id: number;
  name: string;
  // Adicione outras informações dos usuários conforme necessário
}

// Definindo o componente UserList
const UserList: React.FC = () => {
  // Estado para armazenar a lista de usuários e o novo nome a ser adicionado
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState<string>("");

  // Função para adicionar um novo usuário à lista
  const addUser = () => {
    // Verifica se o nome do usuário não está vazio
    if (newUserName.trim() === "") {
      // Evita adicionar usuários sem nome
      return;
    }

    // Cria um novo objeto de usuário
    const newUser: User = {
      id: users.length + 1, // Atribui um ID único com base no comprimento atual da lista
      name: newUserName,
      // Adicione outras informações dos usuários conforme necessário
    };

    // Atualiza o estado adicionando o novo usuário à lista
    setUsers([...users, newUser]);
    // Limpa o campo de entrada após adicionar o usuário
    setNewUserName("");
  };

  // Renderiza o componente UserList
  return (
    <div className="user-list-container">
      {/* Título da lista de usuários */}
      <h2>Usuários</h2>

      {/* Lista de usuários renderizada */}
      <ul className="user-list">
        {/* Mapeia cada usuário na lista e renderiza seus nomes */}
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            {user.name}
            {/* Renderize outras informações dos usuários conforme necessário */}
          </li>
        ))}
      </ul>

      {/* Formulário para adicionar novo usuário */}
      <div className="add-user-form">
        {/* Campo de entrada para o nome do novo usuário */}
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Digite o nome do usuário"
          className="add-user-input"
        />

        {/* Botão para adicionar um novo usuário */}
        <button onClick={addUser} className="add-user-button">
          Adicionar Usuário
        </button>
      </div>
    </div>
  );
};

export default UserList;
