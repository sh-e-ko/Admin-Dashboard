import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { UsersApi } from '../../../Api/UsersApi';
import style from './TableTeam.module.css'
export default function TableTeam()
{

    const [users, setusers] = useState([]);


    useEffect(() =>
    {
        UsersApi.get("/").then((res) =>
        {
            setusers(res.data.users)
            console.log("users", res.data.users)
        })


    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>age</th>
                        <th>email</th>
                        <th>password</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? (users.map((user) => (

                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                        </tr>

                    )
                    )) : (<tr>
                        <td  > Loading...</td>
                    </tr>)}
                    <tr>
                        <th colSpan={users.length} > users =  {users.length}</th>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}
