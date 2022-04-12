import React from 'react'
import PropTypes from 'prop-types'

const TodoTypes = {
  Todo: PropTypes.shape({
    text: PropTypes.string,
    amount: PropTypes.number,
    done: PropTypes.bool
  }),
  onSelect: PropTypes.func
}

export default TodoTypes