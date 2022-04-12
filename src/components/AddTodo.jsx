import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import {Button, Grid, TextField} from '@mui/material';

const AddTodo = () => {
    const {state, dispatch, addTodo} = useContext(TodoContext)
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={12} md={4} >
                <TextField label="Expense" variant="outlined" size="small" style={{marginRight: '1rem'}} value={state.todo.text} type="text" onChange={(evt) => dispatch({ type: 'SET_TODO', payload: {...state.todo, text: evt.target.value} })} />
            </Grid>
            <Grid item xs={2} sm={12} md={4} >
                <TextField label="Value" variant="outlined" size="small" style={{marginRight: '1rem'}} value={state.todo.amount} type="number" onChange={(evt) => dispatch({ type: 'SET_TODO', payload: {...state.todo, amount: evt.target.value} })} />
            </Grid>
            <Grid item xs={2} sm={12} md={4} >
                <Button variant="contained" size="large" disabled={!state.todo.text.length || state.todo.amount <= 0} onClick={() => addTodo()}>Add</Button>
            </Grid>
        </Grid>
    )
}

export default AddTodo