//useReducer : when two states are connected closely, it's better to use useReducer than 2 useState
import React, { useReducer, useEffect } from 'react';

import './Input.css';
import { validate } from '../../util/validators';

const inputReducer = (currentState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...currentState,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return {
        ...currentState,
        isTouched: true,
      };
    default:
      return currentState;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '',
    isValid: props.valid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, onInput, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: 'TOUCH',
    });
  };

  // can be either input or textarea
  const inputElement =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      ></textarea>
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
