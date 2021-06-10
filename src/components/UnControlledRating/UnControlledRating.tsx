import React, {useState} from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue? : RatingValueType
    onChange: (value: RatingValueType) => void
}

function UnControlledRating(props: RatingPropsType) {
    console.log("rating rendering")

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star select={value > 0} setValue={() => {setValue(1);  props.onChange(1)}} value={1}  />
            <Star select={value > 1}  setValue={() => {setValue(2); props.onChange(2)}} value={2}/>
            <Star select={value > 2}  setValue={() => {setValue(3); props.onChange(3)}} value={3}/>
            <Star select={value > 3}  setValue={() => {setValue(4); props.onChange(4)}} value={4}/>
            <Star select={value > 4}  setValue={() => {setValue(5); props.onChange(5)}} value={5}/>
        </div>
    )
}

type StarPropsType = {
    select: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => {
        props.setValue(props.value)
    }}>
            {props.select ? <b>star </b> : "star "}
    </span>
}

export default UnControlledRating;