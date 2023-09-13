import { createReducer } from "@reduxjs/toolkit";

const auth_state = {
  auth: false,
};

const loading_state = {
  loading: false,
};

const user_state = {
  user: {},
};


const users_companies_state={
  companies:[],
  users:[]
}

export const auth_state_reducer = createReducer(auth_state, {
  auth_data: (state, action) => {
    state.auth = action.payload;
  },
});

export const loading_state_reducer = createReducer(loading_state, {
  loading_data: (state, action) => {
    state.loading = action.payload;
  },
});

export const user_state_reducer = createReducer(user_state, {
  user_data: (state, action) => {
    state.user = action.payload;
  },
});

export const users_companies_state_reducer = createReducer(users_companies_state ,{
  users_companies_data:(state,action)=>{
    console.log(action)
state.companies = action.payload.companies
state.users = action.payload.users
  }
})