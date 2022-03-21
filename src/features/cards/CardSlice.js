import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const card = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
      };
      state.cards[action.payload.id] = card;
    }
  }
});

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
