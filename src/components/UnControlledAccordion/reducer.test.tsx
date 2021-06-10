import {reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";

test("value should be changed", () => {

    //data
    const state: stateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)


})