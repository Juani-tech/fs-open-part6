import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const Anecdote = ({ content, votes, handleClick }) => {
  return (
    <div>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };

  const anecdotas = anecdotes.map((anecdote) => {
    <Anecdote
      key={anecdote.id}
      content={anecdote.content}
      votes={anecdote.votes}
      handleClick={() => dispatch(vote(anecdote.id))}
    />;
  });
  console.log(`ANECDOTAS: ${anecdotas[0]}`);

  return anecdotes.map((anecdote) => {
    return (
      <Anecdote
        key={anecdote.id}
        content={anecdote.content}
        votes={anecdote.votes}
        handleClick={() => dispatch(vote(anecdote.id))}
      />
    );
  });
};

export default AnecdoteList;
