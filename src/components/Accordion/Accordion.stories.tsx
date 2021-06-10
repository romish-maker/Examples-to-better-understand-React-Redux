import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react/dist/ts3.9/client/preview/types-6-0";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion node change event fired ')
const onClickCallback = action('some item was clicked')
//
// const Template: Story<AccordionPropsType> = (args) => <Accordion{...args}/>
// export const MenuCollapsedMode2 = Template.bind({})
// MenuCollapsedMode2.args = {
//     titleValue: 'Menu',
//     changeState: callback,
// }

export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={'Menu'} changeState={callback}
                                                  items={[]} onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} titleValue={'Users'} changeState={callback}
                                                     onClick={onClickCallback}
                                                     items={
                                                         [
                                                             {title: "Romish", value: 1},
                                                             {title: "Shaha", value: 2},
                                                             {title: "Rinat", value: 3}
                                                         ]
                                                     }/>

export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion collapsed={value} titleValue={'Users'} changeState={() => setValue(!value)}
                      items={
                          [
                              {title: "Romish", value: "1"},
                              {title: "Shaha", value: "2"},
                              {title: "Rinat", value: "3"}
                          ]
                      }
                      onClick={(value) => {
                          alert(`user with ${value} should be happy  `)
                      }}
    />
};
