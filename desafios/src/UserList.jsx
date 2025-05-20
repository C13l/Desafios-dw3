import React, {useState, useEffect} from "react";

const UserList =()=>{

    const [users, setUsers] = useState([])
    const [loading, setLoading] =useState(true);
    const [newUserName, setNewUserName] = useState('');
    const[selectedUser, setSelectedUser] = useState(null);
    const apiURL = "https://682cf2b34fae188947545f73.mockapi.io/users/usuario"

    useEffect(()=>{
        fetch(apiURL)
        .then((response)=> response.json())
        .then(data => {
            setLoading(false);
            setUsers(data);
        })
        .catch((error)=> {
            setLoading(false);
            console.log("Error al obtener usuarios: ", error);
        })
    },[apiURL])


    //Crear nuevo usuario
    const createNewUser = ()=>{
        fetch(apiURL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:newUserName})
        })
        .then(res => res.json())
        .then(()=>{
            setNewUserName('')
        })
        .then(()=>{
            return fetch(apiURL)
        })
        .then((response)=> response.jason())
        .then(data => {
            setUsers(data)
        })
        .catch((error)=> {
            console.log("Error al obtener usuarios: ", error)})
    }


    //Modificar Dato
    const UpdateUser = ()=> {
        if (!selectedUser) return;
        fetch(`${apiURL}/${selectedUser.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({name: newUserName}),
        })
        .then((response)=> response.json())
        .then((updatedUser)=> {
            setUsers(users.map((user) => (user.id === selectedUser.id ?
                updatedUser : user)));
                setNewUserName('');
                setSelectedUser(null);
        })
        .catch((error) => console.error("Error al actualizar usuario: ", error));
    };
    





    //Eliminar Dato
    const deleteUser = (userId) => {
        fetch(`${apiURL}/${userId}`, {
            method : 'DELETE',
        })
        .then(()=> {
            setUsers(users.filter((user) => user.id !== userId));
            setNewUserName('');
            setSelectedUser(null);
        })
        .catch((error) => console.error("Error al eliminar usuario: ", error));
    };



    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {
                loading ?
                (<h1>Cargando...</h1>)
                :
                (<ul>
                    {users.map((user)=>(
                        <li key={(user.id)}>
                            {user.name}
                            <button onClick={()=> setSelectedUser(user)}>Seleccionar para editar</button>
                            <button onClick={()=> deleteUser(user.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>)
            }
            <div>
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e)=> setNewUserName(e.target.value)}
                    placeholder="Nombre del usuario"
                />

                {
                    selectedUser ?
                    (<button onClick={UpdateUser}>Actualizar usuario</button>)
                    :
                    (<button onClick={createNewUser}>Crear usuario</button>)
                }
            </div>
        </div>
    )
}

export default UserList