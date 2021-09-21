import React from 'react';

const UserTodos = ({todos,onCompleted,onDelete}) => {
    return (
        <div>
            <h1>Lista de tareas</h1>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>
                            {todo.completed ? (
                                "completada"
                            ) : (
                                <button onClick={() => onCompleted(index)}>
                                    Marcar como completado
                                </button>
                            )}
                        </td>
                        <td>
                            <button onClick={() => onDelete(index)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTodos;
