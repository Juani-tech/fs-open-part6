import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import anecdotesService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotesService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
  });

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification></Notification>
      <Filter></Filter>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
