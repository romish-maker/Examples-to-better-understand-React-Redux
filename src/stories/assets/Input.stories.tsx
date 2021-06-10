import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;


export default {
    title: 'input',
    // component: input,
}

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => { // Обьявляем не контролиемый инпут и следим за ее изменениями
    let [value, setValue] = useState("") // Локальный стэйт для хранения данных внутри компонента
    const onChange = (event: ChangeEvent<HTMLInputElement>) => { /*
                          накидываем на <input/> событие onChange,
                          через event.currentTarget.value следим за измением инпута,
                          помещаем изменения в переменную actuallyValue
                          Далее с помощью setValue(actuallyValue) уже перерисовываем компоненту под актуальные данные
                          Следит за изменением и выводит значени введеное в инпут -- {value}
                          */
        const actuallyValue = event.currentTarget.value
        setValue(actuallyValue)
    }
    return <><input onChange={onChange}/>-- {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => { // Обьявляем функцию не контролиемого инпута
    let [value, setValue] = useState("") // Локальный стэйт для хранения данных внутри компонента
    const inputRef = useRef<HTMLInputElement>(null) // С помощью хука useRef() создаем ссылку "inputRef"

    const save = () => {
        // В callback save мы можем обратиться к ссылке inputRef
        // взять значение, т.е. на что ссылается, current. засунуть в el это значение
        // и уже в setValue(el.value) взять его значение .value, и сохранить в свой локальный стэйт
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div><input // Далее мы должны привязаться ссылку inputRef к <input>, к элементу к которому хотим ссылаться
        ref={inputRef} // привязаться ссылку inputRef к <input>
    />
        <button onClick={save}>
            save
        </button>
        actual value: {value}</div>
}


export const ControlledInput = () => { // Объявлеяем функцию контролируемого <input />
    const [parentValue, setParentValue] = useState("") // Локальный стэйт для хранения данных внутри компонента

    // callback onChange прокидывается в события onChange в <input />
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
        // Меняем состояние локального стэйта и компонента перезапускается
        // для перерисовки, мы суем в setParentValue(event.currentTarget.value),
        // т.е. новое значение которое появилось в инпуте
    }
    return <input value={parentValue} onChange={onChange}/> //
}
export const ControlledCheckbox = () => { // Объявлеяем функцию контролируемого <input type="checkbox" />
    const [parentValue, setParentValue] = useState(true) // Локальный стэйт для хранения данных внутри компонента

    // callback onChange прокидывается в события onChange в <input />
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
        // Меняем состояние локального стэйта и компонента перезапускается
        // для перерисовки, мы суем в setParentValue(event.currentTarget.checked),
        // т.е. новое значение true or false
        // для чекбокса всегда и состояние(стейт) всегда работает на true or false. !!!!IMPORTANT
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/> //
}
export const ControlledSelect = () => { // Объявлеяем функцию контролируемого <select />
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    // Локальный стэйт для хранения данных внутри компоненты, даем типизацию string | undefined
    // InitialState у useState в случае с <select/>
    // всегда будет id каждого <option value="значение тут будет как раз значением InitialState"></option> в <select />
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {//
        setParentValue(event.currentTarget.value)
        // Меняем состояние локального стэйта и компонента перезапускается
        // для перерисовки, мы суем в setParentValue(event.currentTarget.value ),
        // Для того чтобы контролировать <select />
        // мы контролируем значени как раз таки именно <select /> а не его <option></option>
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Almaty</option>
        <option value={"2"}>Astana</option>
        <option value={"3"}>Dushanbe</option>
    </select>
}


// const Template: Story<ButtonProps> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
