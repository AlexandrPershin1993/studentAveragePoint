import React from 'react';

export const createArrayComponents = (count, func, array = [], iter = 0) => {
  const newArray = [...array];
  if(count <= iter) return newArray;
  newArray.push(func(iter));
  return createArrayComponents(count, func, newArray, ++iter);
};

export const createInput = placeholder => Component => props => (
  <Component {...props} placeholder={placeholder} />
);