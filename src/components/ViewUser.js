import React, { useEffect, useState } from 'react';
import axios from "axios"

function ViewUser(props) {
    const style = {
        top: '23%',
        left: '14%',
        position: 'absolute'
    }
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('/user');
            setUsers(response.data);
        }
        getUsers();
    }, [users]);


    const handleDeleteUser = async (id) => {

        await axios.delete(`/user/${id}`);

        setUsers(users.filter(meal => meal.id !== id));

    }
    return (
        <table className="table m-auto w-75" style={style}>
            <thead>
                <tr className="table-light">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Thao tác</th>

                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr className="table-light" key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>
                            <button type="button" className="btn btn-danger ml-2" onClick={() => handleDeleteUser(user.id)}> Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ViewUser;