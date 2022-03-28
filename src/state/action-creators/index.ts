import {Dispatch} from "redux";

const addToDo = (toDo: string, id: number) => (dispatch: Dispatch) =>
    dispatch({
        type: "add",
        text: toDo,
        id: id
    })

const modifyToDo = (toDo: string, id: number) => (dispatch: Dispatch) =>
    dispatch({
        type: "modify",
        text: toDo,
        id: id
    })

const deleteToDo = (id: number) => (dispatch: Dispatch) => {
    dispatch({
        type: "delete",
        id: id
    })
}

const incrementID = (id: number) => (dispatch: Dispatch) => {
    dispatch({
        type: "increment",
        uniqueID: id
    })
}

export {
    incrementID,
    addToDo,
    modifyToDo,
    deleteToDo,
}