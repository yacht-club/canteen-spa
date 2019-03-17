export const isCartPage = state => state.router.location.pathname === '/cart';

export const joinCartWithDishes = state =>
  state.cart.items.map(dishUid => state.dishes.items.find(dish => dish.dishUid === dishUid) || {});
