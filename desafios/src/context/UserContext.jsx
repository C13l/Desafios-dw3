import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const apiUrl = "https://682cf2b34fae188947545f73.mockapi.io/users/usuario";

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => setUsers(data))
            .catch((error) => console.error("Error al obtener usuarios:", error))
            .finally(() => {
                setLoading(false);
            });
    }, [apiUrl]);

    const handleCreateUser = (newUser) => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((createdUser) => {
                setUsers([...users, createdUser]);
            })
            .catch((error) => console.error(error.message));
    };

    const handleUpdateUser=(userId, updatedData)=>{
        fetch($`{apiURL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then((updatedUser) => {
            setUsers(users.map(user => user.id === userId ? updatedUser : user));
            setSelectedUser(null);
        })
        .catch((error) => {
            console.error("Error al actualizar usuario:", error);
        });
    }


const handleDeleteUser=(userId)=>{
        fetch(`${apiURL}/${userId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setUsers(users.filter(user => user.id !== userId));
            setNewUserName('');
            setSelectedUser(null);
        })
        .catch((error) => {
            console.error("Error al eliminar usuario:", error);
        });
    }

    return (
        <UserContext.Provider value={{
            users, loading, setUsers,
            newUserName, setNewUserName, handleCreateUser, handleUpdateUser,
            selectedUser, setSelectedUser, handleDeleteUser
        }}>

            {children}
        </UserContext.Provider>
    );
};