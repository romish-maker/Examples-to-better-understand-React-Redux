import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UnControlledAccordion, {AccordionTitle} from "./UnControlledAccordion";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}
const callback = action('accordion node change event fired ')



export const ModeChanging = () => {

    return <UnControlledAccordion titleValue={'Menu'} />
};
