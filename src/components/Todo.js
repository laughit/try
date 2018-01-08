import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id }) => (
    <li
     onClick = {onClick}
     style = {{
         textDecoration: completed ? 'line-through' : 'none'
      }}
    >
        <div className="content">
            <p>{ id + 1  + ". " + text }</p>
        </div>
    </li>
)


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo