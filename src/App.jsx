import { Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Spinner from './components/spinner';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    </>
  )
}

export default App;