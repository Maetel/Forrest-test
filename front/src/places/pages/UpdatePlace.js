import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [];

const createDummys = (userId) => {
  const basicForm = {
    id: 'p',
    title: '장소',
    description: '더미설명',
    imageUrl: 'https://picsum.photos/500/',
    address: '주소',
    location: { lat: 0, lng: 0 },
    creator: 'u' + String(userId),
  };
  for (let i = 1; i < userId + 1; ++i) {
    const cloned = JSON.parse(JSON.stringify(basicForm));
    const _i = String(i);
    cloned.id = cloned.id + _i;
    cloned.title = cloned.title + _i;
    cloned.description = cloned.description + _i;
    cloned.address = cloned.address + _i;
    cloned.location.lat = Math.random() * 45 * (Math.random() - 0.5);
    cloned.location.lng = Math.random() * 45 * (Math.random() - 0.5);
    DUMMY_PLACES.push(cloned);
  }
};

createDummys(1);
createDummys(2);

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        {' '}
        <h2>Place not found!</h2>
      </div>
    );
  }

  console.log(identifiedPlace);
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH()]}
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      ></Input>
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      ></Input>
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
