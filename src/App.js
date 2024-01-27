
import { Navigate, Route, Routes, redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard/Dashboard';
import Form from './modules/Form/Form';
import Navbar from './components/Navbar';
import Tracker from './components/Tracker';

const ProtectedRoutes = ({children , auth=false})=>{
  const  isLoggedIn = localStorage.getItem('user:token') !== null || false

  if(!isLoggedIn && auth) {
    return  <Navigate to={"/signin"}/>
  }

  else if (isLoggedIn && ["/signin","/signup"].includes(window.location.pathname)){
    return <Navigate to={"/"}/>
  }

  return children
}

function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <ProtectedRoutes auth={true}>
          <Dashboard/>
        </ProtectedRoutes>
      }/>
      <Route path='/signin' element={
        <ProtectedRoutes>
          <Form isSignInPage={true}/>
        </ProtectedRoutes>
      }/>
      <Route path='/signup' element={
        <ProtectedRoutes>
          <Form isSignInPage={false}/>
        </ProtectedRoutes>
      }/>
      <Route path='/tracker' element={<Tracker/>}/>
    </Routes>
    </>);
}

export default App;
