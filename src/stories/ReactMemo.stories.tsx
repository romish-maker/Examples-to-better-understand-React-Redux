import * as React from "react";
import {useMemo, useState} from "react";

export default {
    title: 'react.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret");
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [count,setCount] = useState(0)
    const [users,setUsers] = useState(['Romish', 'Beha', 'Rama'])
    const addUser = () => {
        const copyUsers =  [...users, 'Rinat ' + new Date().getTime() ]
        setUsers(copyUsers)
    }
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={count}/>
            <Users users={users}/>
        </>
    )
}