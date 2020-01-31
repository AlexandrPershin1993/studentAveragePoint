import React from 'react';

export const createArrayComponents = (count, func, array = [], iter = 0) => {
  if(count <= iter) return array;
  array.push(func(iter));
  return createArrayComponents(count, func, array, ++iter);
};

export const createInput = placeholder => Component => props => (
  <Component {...props} placeholder={placeholder} />
);