/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem.jsx';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
