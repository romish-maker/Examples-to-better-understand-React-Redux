import Rating, {RatingValueType} from "./Rating";
import {useState} from "react";


export default {
    title: 'Raiting stories',
    component: Rating
}


export const EmptyRating = () => <Rating value={0} eventClick={x => x}/>
export const Rating1 = () => <Rating value={1} eventClick={x => x}/>
export const Rating2 = () => <Rating value={2} eventClick={x => x}/>
export const Rating3 = () => <Rating value={3} eventClick={x => x}/>
export const Rating4 = () => <Rating value={4} eventClick={x => x}/>
export const Rating5 = () => <Rating value={5} eventClick={x => x}/>
export const RatingChange = () => {
    let [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} eventClick={setRating}/>
};
