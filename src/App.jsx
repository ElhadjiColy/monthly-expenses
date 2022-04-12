import './App.css'
import { useReducer } from 'react'
import TodoItem from './components/Todo'
import AddTodo from './components/AddTodo'
import TodoContext from './TodoContext'
import TodoContainer from './components/TodoContainer'
import TodoStatusProgress from './components/TodoStatusProgress'
import TodoReducer from './TodoReducer'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import TodoTypes from './TodoTypes'


TodoItem.propTypes = TodoTypes

function App() {

  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    todo: {
      text: '',
      amount: 0,
      done: false
    }
  }) 

  const addTodo = () => {
    dispatch({
      type: 'SET_TODOS',
      payload: [...state.todos, {...state.todo, done: false}]
    })
    
    dispatch({
      type: 'SET_TODO',
      payload: {
        text: '',
        amount: 0,
        done: false
      }
    })
  }

  const markTodo = (idx) => {
    const tmp = [...state.todos]
    tmp[idx].done = !tmp[idx].done

    dispatch({
      type: 'SET_TODOS',
      payload: tmp
    })
  }

  return (
    <TodoContext.Provider
      value={{
        markTodo,
        addTodo,
        state,
        dispatch
      }}
    >
      <Container maxWidth="sm" fixed  >
        <Navbar/>
        <h2>Monthly Expenses</h2>
        <AddTodo />
        <TodoContainer />
        {
          state.todos.length ?
            <TodoStatusProgress /> :
              null
        }
      </Container>
    </TodoContext.Provider>
  )
}

export default App
