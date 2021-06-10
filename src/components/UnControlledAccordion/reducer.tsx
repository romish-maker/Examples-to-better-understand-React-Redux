type actionType = {
    type: string
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type stateType = {
    collapsed: boolean
}
export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }

}