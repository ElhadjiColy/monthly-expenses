import { Button, Grid } from '@mui/material'
import React from 'react'

const TodoItem = ({Todo, onSelect}) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="flex-start"
      style={{ textDecoration: Todo.done ? 'line-through' : '', textDecorationColor: Todo.done ? '#900C3F' : '', cursor: 'pointer', minHeight: '3rem', marginTop: '2px', marginLeft: '2px' }} onClick={() => onSelect()}>
        <Grid item item xs={4} sm={12} md={4}>
          {Todo.text}
        </Grid>
        <Grid item item xs={4} sm={6} md={4}>
          {Todo.amount} XOF
        </Grid>
        <Grid item item xs={4} sm={6} md={4}>
          <Button variant="text" size="small" color="error">Delete</Button>
        </Grid>
    </Grid>
  )
}

export default TodoItem