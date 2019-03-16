import client from './client';

export const fetchDishes = ({ canteenUid }) =>
  client
    .get(`/dishes?canteenUid=${canteenUid}`)
    .then(x => x.data)
    .then(x => x.content);
