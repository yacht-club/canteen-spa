import client from './client';

export const fetchDishes = ({ canteenUid }) =>
  client
    .post('/dishes/search', {
      canteenUid,
    })
    .then(x => x.data);
