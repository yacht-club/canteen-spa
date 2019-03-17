import client from './client';

export const fetchFilters = () => client.get('/dishes/categories').then(x => x.data);
