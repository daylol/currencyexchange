import { useEffect, useReducer } from 'react';
import { getUsd, getEur, getUah } from './utils';
import { initialState, reducer } from './reducer';
import { Header } from './Header';
import { MainBlock } from './MainBlock';


const App = () => {
  const [{ usd, eur }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getUsd((data) => dispatch({ type: 'SET_USD', payload: data }));
  }, []);

  useEffect(() => {
    getEur((data) => dispatch({ type: 'SET_EUR', payload: data }));
  }, []);

  return (
    <div>
      <Header usd={usd} eur={eur} />
      <MainBlock usd={usd} eur={eur} />
    </div>
  )
}

export default App;
