import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import  LinearProgress  from '@mui/material/LinearProgress'

const TodoStatusProgress = () => {
    const { state } = useContext(TodoContext)

    const progress = (state.todos.filter(todo => todo.done).length/state.todos.length) * 100
    
    return (
        <div style={{ paddingTop: '1rem', maxWidth: '350px' }}>
            <div>Total: { state.todos.map(el => el.amount).reduce((s,d) => s + +d, 0) }</div>
            <div>Expenses: { state.todos.filter(td => td.done).map(el => el.amount).reduce((s,d) => s + +d, 0) }</div>
            <div>Remainings: { state.todos.filter(td => !td.done).map(el => el.amount).reduce((s,d) => s + +d, 0) }</div>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default TodoStatusProgress