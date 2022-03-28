interface Action {
    type: string,
    uniqueID: number
}

const reducer = (state: number = 0, action: Action) => {
    switch (action.type) {
        case "increment" :
            return action.uniqueID + 1

        default:
            return state
    }
}

export default reducer