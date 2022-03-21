import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const topicObj = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
      };
      state.topics[action.payload.id] = topicObj;
    },
    addQuizId: (state, action) => {
      const quizId = action.payload.quizId;
      const topicId = action.payload.topicId;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

// selectors
export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;
