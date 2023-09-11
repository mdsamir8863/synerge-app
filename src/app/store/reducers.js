import { createReducer } from "@reduxjs/toolkit";

const auth_state = {
  auth: false,
};

export const auth_state_reducer = createReducer(auth_state, {
  auth_data: (state, action) => {
    state.auth = action.payload;
  },
});
