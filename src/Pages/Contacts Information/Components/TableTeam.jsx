import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { UsersApi } from '../../../Api/UsersApi';
import style from './TableTeam.module.css'
export default function TableTeam()
{

    const [users, setusers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(user.id).includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())

    );
    useEffect(() =>
    {
        UsersApi.get("/").then((res) =>
        {
            setusers(res.data.users)
            console.log("users", res.data.users)
        })


    }, []);

    return (
        <div >

            <div className={style.input}>
                <input
                    type="Search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '10px', padding: '5px', width: '300px' }} />
            </div >
            <div>
                <Button>

                </Button>
                <Button>

                </Button>
            </div>

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
                        {filteredUsers ? (filteredUsers.map((user) => (

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

        </div>
    )
}
