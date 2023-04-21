import logo from './logo.svg';
import './App.css';
import {addToCart} from './redux/action';
import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main>
        </Main> </div>
  );
}

export default App;
