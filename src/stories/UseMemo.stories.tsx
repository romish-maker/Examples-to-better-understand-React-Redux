import * as React from "react";
import {useMemo, useState} from "react";                                // 123124

export default {
    title: 'use.Memo'
}

function generateData() {
    console.log("generateData")
    return 1;
}

export const Example1 = () => {
    console.log('Example1');

    // const initValue = useMemo(generateData, [])

    const [count,setCount] = useState(generateData) // [3242342, f()]



    const changer = (state: number) => {
        debugger;
        return state + 1
    }

    return (
        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    )
}