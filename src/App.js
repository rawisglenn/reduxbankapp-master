import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';
import { depositMoney } from './state/action-creators';

function App() {
  
  const account = useSelector((state)=>state.account);
  const dispatch = useDispatch();

  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="app">
      <p>{account}</p>
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
