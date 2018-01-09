
import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setVisibilityFilter } from '../actions'
import 'bulma/css/bulma.css'


let AddTodo = ({ dispatch }) => {
    let input
    let selection

    return (
        <div>
            <div className="field">
                <div className="control">
                    <input className="input" type="text"
                    ref={node => {
                        input = node
                    }}
                    />


                </div>
            </div>
            <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-link"
                            onClick = { e => {
                                e.preventDefault()
                                if (!input.value.trim()){
                                    alert('please enter a value')
                                    return
                                }
                                dispatch(addTodo(input.value))
                                input.value = ''
                                console.log('you are here')
                            }} 
                        >Add Todo</button>
                    </div>
            </div>

            <div className="field">
                <label className="label">Show Todos:</label>
                <div className="control">
                    <div className="select">
                        <select  ref = { node => { selection = node }} onClick = { 
                                e => {
                                    dispatch(setVisibilityFilter(selection.value))
                                    }}>
                            <option value="SHOW_ALL">All</option>
                            <option value="SHOW_ACTIVE">Active</option>
                            <option value="SHOW_COMPLETED">Completed</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}       

AddTodo = connect()(AddTodo)

export default AddTodo 