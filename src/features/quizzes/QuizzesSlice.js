import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicsSlice";
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const quiz = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: action.payload.cardIds
      };
      state.quizzes[action.payload.id] = quiz;
    }
  }
});

// action creator
export const thunkAddQuizCreator = (payload) => {
  return (dispatch) => {
    // dispatch(addQuiz(payload));
    // dispatch(addQuizId(payload));
    dispatch(addQuiz(payload));
    dispatch(addQuizId({ topicId: payload.topicId, quizId: payload.id }));
  };
};
// selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
