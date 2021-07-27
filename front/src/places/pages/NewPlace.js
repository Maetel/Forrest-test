import React, { useCallback, useReducer } from 'react';

import './PlaceForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
  //this function object is created everytime rendered, so I need to store this function by using 'useCallback()'
  const initialState = {
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
  };
  const [formState, inputHandler] = useForm(initialState, false);

  const placeSubmitHandler = (event) => {
    event.preventDefault();

    //send to a server later
    console.log(`Send to a server later here.`);
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Input title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      ></Input>
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least of 5 characters)"
        onInput={inputHandler}
      ></Input>
      <Input
        id="address"
        element="input"
        label="Address"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
