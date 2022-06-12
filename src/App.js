
import './App.css';
import Swar from './Swar.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Loading from './components/Loading'
import { addCashAction, getCashAction, resetCashAction } from './Bll/store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './Bll/store/customerReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const [number, setNumber] = useState("");
  const [customer, setCustomer] = useState("");
  const addCash = (number) => {
    dispatch(addCashAction(number));
  }
  const getCash = (number) => {
    dispatch(getCashAction(number));
  }
  const resetCash = (number) => {
    dispatch(resetCashAction(number = 0))
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),

    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
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
        <Swar className="swar" />
      </div>
      <div>
        <input style={{ 'padding': '10px' }}
          type="text"
          onChange={(e) => setCustomer(e.target.value)}
        />
        <button style={{ 'padding': '10px' }}
          onClick={() => addCustomer(customer)}
        >addClient</button>
        <button style={{ 'padding': '10px' }}>removeClient</button>
      </div>
      <div style={{ 'fontSize': '25px' }}>
        {
          customers.length > 0 ?
            <ul style={{ 'maxWidth': '200px', 'margin': ' auto' }}>
              {
                customers.map((customer, index) => {
                  return <li
                    key={customer.id}
                    onClick={() => removeCustomer(customer)}
                    onBlur={(e) => setTimeout(() => { setCustomer(e.target.value = "") }, 100)}
                  >{index + 1}. {customer.name}</li>
                })
              }
            </ul>
            :
            <>
              <h2>no clients</h2>
              <Loading />
            </>
        }
      </div>
    </div>
  );
}

export default App;
