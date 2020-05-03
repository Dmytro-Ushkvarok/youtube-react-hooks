/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';

const TodoItem = ({ title, id, completed }) => {
  const { dispatch } = useContext(Context);

  const classNames = ['todo'];
  if (completed) {
    classNames.push('completed');
  }

  return (
    <li className={classNames.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            dispatch({
              type: 'toggle',
              payload: id,
            })
          }
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() =>
            dispatch({
              type: 'remove',
              payload: id,
            })
          }
          role="button"
          onKeyPress={() => {}}
          tabIndex="0"
        >
          delete
        </i>
      </label>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
};

TodoItem.defaultProps = {
  id: 0,
  title: '',
  completed: false,
};

export default TodoItem;
