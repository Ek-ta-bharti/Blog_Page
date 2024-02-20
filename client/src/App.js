
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//component
import Login  from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/headers/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div style={{marginTop: 180}} >
      <Routes>
       <Route path ='/login' element={<Login/>} />
       <Route path ='' element={<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
      );
}

export default App;

