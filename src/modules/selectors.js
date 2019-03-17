export const isCartPage = state => state.router.location.pathname === '/cart';

export const joinCartWithDishes = state =>
  state.cart.items.map(dishUid => state.dishes.items.find(dish => dish.dishUid === dishUid) || {});

export const filteredDishes = state =>
  state.dishes.items.filter(
    dish => !state.filters.selectedCategory || dish.category === state.filters.selectedCategory
  );
