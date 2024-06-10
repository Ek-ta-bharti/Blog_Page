
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// //component
// import Login  from './components/account/Login';
// import Home from './components/home/Home';
// import Header from './components/headers/Header';
// import CreatePost from './components/create/CreatePost';
// import LoginHeader from './components/loginheader/LoginHeader';

// function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//     <LoginHeader/>
//     <div style={{marginTop: 8}} >
//       <Routes>
//        <Route path ='/login' element={<Login/>} />
//        <Route path ='/h' element={<Home/>} />
//        <Route path='/create' element ={<CreatePost />} />
//        <Route path ='loginheader' element={<LoginHeader/>} />
//       </Routes>

//     </div>
//     </BrowserRouter>
//       );
// }

// export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//component
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/headers/Header';
import CreatePost from './components/create/CreatePost';
import LoginHeader from './components/loginheader/LoginHeader';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <LoginHeader /> */}
      <div style={{ marginTop: 8 }}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='' element={<Home />} /> {/* Added route for '/p' */}
          <Route path='/create' element={<CreatePost />} />
          <Route path='/loginheader' element={<LoginHeader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/account/Login';
// import Home from './components/home/Home';
// import Header from './components/headers/Header';
// import CreatePost from './components/create/CreatePost';
// import LoginHeader from './components/loginheader/LoginHeader';

// // State management (replace with your preferred library if needed)
// import { useState } from 'react';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   // Handle login logic (replace with your actual authentication mechanism)
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <BrowserRouter>
//       {/* Conditionally render headers based on login status */}
//       {isLoggedIn ? <LoginHeader /> : <Header />}

//       <div style={{ marginTop: 8 }}>
//         <Routes>
//           <Route
//             path="/login"
//             element={<Login onLogin={handleLogin} />} // Pass login function to Login component
//           />
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/loginheader" element={<Navigate to="/" replace />} /> {/* Redirect from loginheader to home */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
