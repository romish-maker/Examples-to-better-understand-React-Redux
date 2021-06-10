import React from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    eventClick: (value: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    console.log("rating rendering")

    return (
        <div>

            <Star select={props.value > 0} eventClick={props.eventClick} value={1}/>
            <Star select={props.value > 1} eventClick={props.eventClick} value={2}/>
            <Star select={props.value > 2} eventClick={props.eventClick} value={3}/>
            <Star select={props.value > 3} eventClick={props.eventClick} value={4}/>
            <Star select={props.value > 4} eventClick={props.eventClick} value={5}/>

        </div>
    )
}

type StarPropsType = {
    select: boolean
    value: RatingValueType
    eventClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={ () => { props.eventClick(props.value) } }>
        {props.select ? <b>star </b> : "star "}
    </span>

}

export default Rating;