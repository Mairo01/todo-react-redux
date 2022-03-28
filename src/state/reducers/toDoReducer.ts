interface ToDoState {
    id: number,
    text: string
}

interface Action {
    type: string,
    text: string,
    id: number
}

const reducer = (state: ToDoState[] = [], action: Action) => {
    switch (action.type) {
        case "add" :
            const toDo = [{ id: action.id, text: action.text }]
            return [...state, ...toDo]

        case "delete" :
            return state.filter(todo =>
                todo.id == action.id ? null : todo)

        case "modify" :
            return state.map(todo =>
                todo.id == action.id ? {...todo, text: action.text} : todo
            )

        default :
            return state
    }
}

export default reducer