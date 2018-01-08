import React from 'react'
import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
import AddTodo from '../containers/AddToDoBulma'
import VisibleTodoList from '../containers/VisibleTodoList'
import 'bulma/css/bulma.css'

const App = () => (
    <div className="section">
        <div className="container">
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <VisibleTodoList/>
                    <AddTodo/>
                    <Footer />
                </div>
                <div className="column"></div>

            </div>
        </div>
    </div>
)


export default App