
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const [number, setNumber] = useState("");
  const addCash = (number) => {
    dispatch({ type: 'ADD_CASH', payload: number });
  }
  const getCash = (number) => {
    dispatch({ type: 'GET_CASH', payload: number });
  }
  const resetCash = (number) => {
    dispatch({ type: 'RESET_CASH', payload: number = 0 })
  }
  return (
    <div className="App">
      <div>
        <h2>{cash}</h2>
      </div>
      <div>
        <input style={{ 'padding': '10px' }}
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          onBlur={(e) => setTimeout(() => { setNumber(e.target.value = "") }, 100)}
        />
        <button style={{ 'padding': '10px' }}
          onClick={() => addCash(number)}
        >+</button>
        <button style={{ 'padding': '10px' }}
          onClick={() => getCash(number)}
        >-</button>
        <button style={{ 'padding': '10px' }}
          onClick={() => resetCash()}
        >RESET</button>
      </div>

    </div>
  );
}

export default App;
