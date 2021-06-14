import * as React from "react";
import {useState} from "react";

export default {
    title: 'react.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Romish", "Shaha", "Behruz", "Katya"]);
    const addUser = () => {
        const copyUsers = [...users,"Sveta " + new Date().getTime() ];
        setUsers(copyUsers);
    }
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </div>
}
