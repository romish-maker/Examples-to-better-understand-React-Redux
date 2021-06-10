import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("accordion rendering")

    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    // useReducer принимает в себя начальное состояние state
    // и второе инструкцию как изменить тот state который пришел и его вернуть
    // не забывать правило иммутабельности когда меняем стейт изнутри ...copy

    return <div>
        <AccordionTitle
            title={props.titleValue}
            EventForClick={() => {
                dispatch(
                    {type: TOGGLE_COLLAPSED}
                )
            }
            }
        />
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    EventForClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <><h3 onClick={() => {
            props.EventForClick()
        }}>{props.title}</h3></>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
}

export default UnControlledAccordion;