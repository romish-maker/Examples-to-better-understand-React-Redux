import React from "react";


type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    eventClick: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map( i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}