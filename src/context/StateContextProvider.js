import React, { useReducer, createContext } from 'react';

const initialState = {
  users: [
    {
      id: 1,
      name: 'Sarah',
      family: 'Anderson',
      revenue: '$100k in revenue',
      comment:
        'Fake Tweet Generator is a tool that allow you to generate realistic-looking fake tweets and then download them as an image. It allows you to make fake tweets with any number of likes, comments, images and reply chains',
      Image: '/User Avatar1.svg',
      email: 'sarah.anderson@test.com',
      password: '123456789',
    },
    {
      id: 2,
      name: 'Mathew',
      family: 'Higgins',
      revenue: '$20k in revenue',
      comment:
        'This is a free, simple, and easy-to-use tool that anyone can use to make their own fake tweets. Generate Fake tweets with Zeoob Fake Tweet Generator tool to create your marketing content and generate its image',
      Image: '/User Avatar2.svg',
      email: 'Mathew.Higgins@test.com',
      password: '123456789',
    },
    {
      id: 3,
      name: 'Janice',
      family: 'dave',
      revenue: '$30k in revenue',
      comment:
        'Add desired content, images, reply chain and save it as png/jpg or directly share on Facebook, Twitter etc. An awesome tool for teachers to create fake tweets and use in the class. ',
      Image: '/User Avatar3.svg',
      email: 'Janice.dave@test.com',
      password: '123456789',
    },
  ],
};

const reducer = (state, action) => {
  state.users.map((user, index) => {
    if (user.id === action.payload.id) {
      state.users[index].comment = action.payload.comment;
    }
  });
  return { ...state, state };
};

export const stateContext = createContext();

function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
}
export default StateContextProvider;
