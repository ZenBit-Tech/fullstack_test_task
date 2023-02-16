import React, {useEffect, useState} from 'react';
import {Loader} from './components/Loader';
import {User} from './components/User';

import axios from "axios"
import {IUser} from "./models";



function App() {

    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    async function getUsers() {
        setLoading(true)
        const response = await axios.get<IUser[]>('http://localhost:8000/user-front/get-all')
        setUsers(response.data)
        setLoading(false)
    }
    async function getUsersByName(name: any) {

        setLoading(true)
        const response = await axios.get<IUser[]>(`http://localhost:8000/user-front/get-by-name?name=${name}`)
        setUsers(response.data)
        setLoading(false)
    }
    useEffect(() => {
        getUsers()
    }, [])
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e: any) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener('scroll', onScroll)
    },[scrollTop]);

    return (
        <div  className='container flex flex-wrap'>
            {loading && <Loader/>}
            <div>{scrollTop}</div>
            {<div style={{width: "100%", textAlign: "center"}}><input
                style={{width: "300px",marginTop: "100px", height: "50px", background: "gray"}} value={name} onChange={(e) => {
                setName(e.target.value)

                getUsersByName(e.target.value)
            }}></input>
            </div>}
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
}

export default App;
