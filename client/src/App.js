
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
//component
import Login  from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/headers/Header';
import CreatePost from './components/create/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div style={{marginTop: 10}} >
      <Routes>
       <Route path ='/login' element={<Login/>} />
       <Route path ='' element={<Home/>} />
       <Route path='/create' element ={<CreatePost />} />
      </Routes>

    </div>
    </BrowserRouter>
      );
}

export default App;

