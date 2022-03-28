import React, {ReactElement, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index"
import { bindActionCreators } from "redux";

interface Store {
    toDos: [
        {
            id: number,
            text: string
        }
    ],
    uniqueID: number
}

function ToDo() {
    const [toDo, setToDo] = useState("")
    const [toDoListHTML, setToDoListHTML] = useState<any>()

    const store = useSelector((state: Store) => state)
    const dispatch = useDispatch()
    const { addToDo, modifyToDo, deleteToDo, incrementID } = bindActionCreators(actionCreators, dispatch)

    const handleChange = (e, setFunction: Function) => setFunction(e.target.value)

    const handleModification = e => {
        const id = parseInt(e.target.parentElement.id)
        setToDoListHTML(todoHTML(id))
    }

    const handleDelete = e => deleteToDo(e.target.parentElement.id)

    const onToDoSubmit = e => {
        e.preventDefault()

        addToDo(toDo, store.uniqueID)
        incrementID(store.uniqueID)
        setToDo("")
    }

    const onToDoModSubmit = (e, id: number) => {
        e.preventDefault()

        const toDoText = e.target[0].value
        modifyToDo(toDoText, id)
    }

    const todoHTML = (id: number | undefined = undefined) =>
        store.toDos.map((e: { id: number, text: string }) =>
            id !== undefined && id === e.id
                ?   <div className="todo" id={ e.id.toString() } key={ e.id }>
                        <form className="todo-form-modify" onSubmit={ e => onToDoModSubmit(e, id) }>
                            <input className="todo-modifying" defaultValue={ e.text }/>
                            <button className="todo-save" type="submit">✅</button>
                        </form>
                    </div>

                :   <div className="todo" id={ e.id?.toString() } key={ e.id }>
                        <p className="todo-text">{ e.text }</p>
                        <p className="todo-modify" onClick={ handleModification }>𝌡</p>
                        <p className="todo-delete" onClick={ handleDelete }>✖</p>
                    </div>
        )

    useEffect(() => {
        setToDoListHTML(todoHTML)
    }, [store])

    return (
        <div className="ToDo">

            <div className="ToDo-form">
                <form onSubmit={ onToDoSubmit }>
                    <label>Enter activity </label>
                    <input value={ toDo } onChange={ e => handleChange(e, setToDo) }/>
                    <button type="submit">Add</button>
                </form>
            </div>

            <div className="ToDo-list">{ toDoListHTML }</div>
        </div>
    )
}

export default ToDo