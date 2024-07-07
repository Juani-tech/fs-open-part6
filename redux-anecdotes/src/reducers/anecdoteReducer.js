import { createSlice } from "@reduxjs/toolkit";

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

const sortByVotes = (anecdotes) => {
  return [...anecdotes].sort((a, b) => b.votes - a.votes); // desc sort
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find((anecdote) => anecdote.id === id);

      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };

      const updatedAnecdotes = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      );
      return sortByVotes(updatedAnecdotes);
    },

    createAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, voteAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
