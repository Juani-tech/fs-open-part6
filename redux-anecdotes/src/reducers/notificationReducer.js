import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      // The new value of the reducer state has to be returned
      return action.payload;
    },
    resetNotification(state, action) {
      // Why do I compare this? Because of the timeout, I don't want an advanced timeOut
      if (action.payload === state) {
        return initialState;
      }
      return state;
    },
  },
});

export const { setNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
