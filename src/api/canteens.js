import client from './client';

export const fetchCanteens = () => client.get('/canteens').then(x => x.data);
