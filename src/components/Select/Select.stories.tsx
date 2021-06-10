import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select
}

const callback = action("should be changing")

export const BaseExample = () => {
    return <Select value={'1'} eventClick={action("Value changed")} items={
        [
            {title: "Roma", value: "1"},
            {title: "Dima", value: "2"},
            {title: "Amir", value: "3"}
        ]
    }
    />
}

