const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODO':
      return {
        ...state,
        todo: action.payload
      }
    
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
        
    default:
      throw new Error('No action');
  }
}

export default TodoReducer