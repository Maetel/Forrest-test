import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

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
    cloned.location.lat = Math.random() * 90;
    cloned.location.lng = Math.random() * 90;
    DUMMY_PLACES.push(cloned);
  }
};

createDummys(1);
createDummys(2);

const UserPlaces = (props) => {
  const userId = useParams().userId;

  const filterd = DUMMY_PLACES.filter(
    (item) => item.creator === String(userId)
  );
  console.log(DUMMY_PLACES);
  return <PlaceList items={filterd}></PlaceList>;
};

export default UserPlaces;
