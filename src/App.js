import { Routes,Route } from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search/Search';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Search/>}  />
        <Route exact path='/login' element={<Login/>}  />
        <Route exact path='/register' element={<Register/>}  />
      </Routes>
    </>
  );
}

export default App;
