


export const setCartToLocal = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export const getCartFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts === null ? [] : JSON.parse(carts);
}

export const clearCartFromLocal = () => {
  localStorage.removeItem('carts');
}

export const setUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}


export const removeUserFromLocal = () => {
  localStorage.clear();
}