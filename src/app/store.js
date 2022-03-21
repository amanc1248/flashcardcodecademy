import { configureStore } from "@reduxjs/toolkit";
import topics from "../features/topics/TopicsSlice";
import quizzes from "../features/quizzes/QuizzesSlice";
import cards from "../features/cards/CardSlice";
export default configureStore({
  reducer: {
    topics: topics,
    quizzes: quizzes,
    cards: cards,
  },
});
