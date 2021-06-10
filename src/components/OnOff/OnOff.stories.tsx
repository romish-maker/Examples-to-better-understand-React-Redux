import {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
}
const callback = action('on or off clicked')


export const OnRating = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    let [onOff, setonOff] = useState<boolean>(false)
    return <OnOff on={onOff} onChange={setonOff}/>
};
