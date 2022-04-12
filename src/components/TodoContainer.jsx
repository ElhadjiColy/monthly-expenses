import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import TodoItem from './Todo'
import { Card } from '@mui/material'

const TodoContainer = () => {
    const { state, markTodo } = useContext(TodoContext)

    return (
        <Card variant="outlined" sx={{ minWidth: 345 }} style={{ marginTop: '1rem' }}>
            {
                state.todos.map((todo, idx) => (
                        <TodoItem key={idx} Todo={todo} onSelect={() => markTodo(idx)}/>
                    )
                )
            }
        </Card>
    )
}

export default TodoContainer