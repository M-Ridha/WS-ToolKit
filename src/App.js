import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incriment, decriment , ShowHide } from './Redux/Slices/CounterSlice'
import MovieList from './MovieList';
import AddMovie from './AddMovie';




function App() {

  const count = useSelector(state => state.ConterReducer.count)
  const toggle = useSelector(state => state.ConterReducer.toggle)
  const movieList = useSelector(state => state.ConterReducer.movieList)
  const dispatch = useDispatch()

  const handelIncri = () => {
    dispatch(incriment())
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>dispatch(ShowHide())}> Show/hide </button>
        {toggle ?
          <>
            <button onClick={() => dispatch(decriment())} > - </button>
            {count}
            <button onClick={handelIncri}> + </button>

          </>
          : <h1> ksdjdkjksdjkdsskd </h1>
        }

        <hr/>
        <hr/>
        <AddMovie/>
        <hr></hr>
        <hr></hr>
        <MovieList movieList={movieList}/>
        <hr></hr>

      </header>
    </div>
  );
}

export default App;
