import * as React from "react";
import {useCallback, useMemo, useState} from "react";

export default {
    title: 'use.memo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(6)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

export const HelpsForReactMemoExample = () => {
    const [a, setA] = useState<number>(6)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
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

export const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Romish', 'Beha', 'Rama'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const copyUser = [...users, 'Shaha ' + new Date().getTime()]
        setUsers(copyUser)
    }

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>addUser</button>
            <NewMessageCounter count={count}/>
            <Users users={newArray}/>
        </>
    )
}
export const LikeUseCallBack = () => {
    console.log("LikeUseCallBack")
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const copyUser = [...books, 'Angular ' + new Date().getTime()]
            setBooks(copyUser)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const copyUser = [...books, 'Angular ' + new Date().getTime()]
        setBooks(copyUser)
    }, [books])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <NewMessageCounter count={count}/>
            <Book addBook={memoizedAddBook2}/>
        </>
    )
}

type BookSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("BooksSecret");
    return <div>
        <button onClick={props.addBook}>addBook</button>
    </div>
}
const Book = React.memo(BooksSecret)

