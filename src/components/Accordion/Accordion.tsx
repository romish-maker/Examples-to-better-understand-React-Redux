import React from "react";

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * changeState it's changing AccordionTitle for sure
     */
    changeState: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {
    console.log("accordion rendering")

    return <div>
        <AccordionTitle
            title={props.titleValue}
            changeState={props.changeState}/>

        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}

        />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    changeState: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <><h3 onClick={(e) => {
            props.changeState()
        }}>{props.title}</h3></>
    );
}

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
            {
                props.items.map((i, index) => <li onClick={ () => { props.onClick(i.value) } } key={index}>{i.title}</li> )
            }
            </ul>
        </>
    );
}

