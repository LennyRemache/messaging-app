import { createSlice } from "@reduxjs/toolkit";

export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducer: {
    setChannelId: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setChannelId } = channelSlice.actions;

export const selectChannelId = (state) => state.channel.channelId;
export const selectChannelName = (state) => state.channel.channelName;

export default channelSlice.reducer;
