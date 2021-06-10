import React, {useState} from 'react';
import './App.css';
// import {log} from "util";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./UnControlledOnOff/UnControlledOnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";


function App(props: any) {
    console.log("app rendering")

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, SetSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Rating
                value={ratingValue}
                eventClick={SetRatingValue}/>
            {/*<Accordion*/}
            {/*    titleValue={"Menu"}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    changeState={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}*/}
            {/* items={[{title: 'Romish', value: 1}]}*/}
            {/*    onClick={() => {}}*/}
            {/*/>*/}
            {/*<OnOff on={switchOn} onChange={() => {*/}
            {/*    SetSwitchOn(!switchOn)*/}
            {/*}}/>*/}
            <UnControlledOnOff onChange={SetSwitchOn}/> {switchOn.toString()}
            <UnControlledAccordion titleValue={"Menu"}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>
            {props.title}
        </h1>
    );
}


export default App;
