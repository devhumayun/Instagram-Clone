
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './components/Verify/Verify';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Birthday from './pages/Birthday/Birthday';
import MobileOtp from './components/Activation/MobileOtp';
import Recaptcha from './pages/ForgetPassword/Recaptcha';
import AccountInfo from './pages/ForgetPassword/AccountInfo';
import ResetPassword from './pages/Reset Password/ResetPassword';
import ConfirmAccount from './pages/Confirm Account/ConfirmAccount';
import ConfirmationCode from './pages/Confirmation Code/ConfirmationCode';
import Code from './pages/Confirmation Code/Code';

function App() {


  return (
    <>

     

      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/mobile-otp' element={<MobileOtp />} />
        <Route path='/recaptcha' element={<Recaptcha />} />
        <Route path='/account-info' element={<AccountInfo />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/confirm-account' element={<ConfirmAccount />} />
        <Route path='/reset-code' element={<ConfirmationCode />} />
        <Route path='/confirmation-code' element={<Code />} />
        <Route path='/:id' element={<Profile/> } />

        <Route path='/user/:id/verify/:token' element={ <Verify /> } />
        
        <Route path='/forget-password' element={ <ForgetPassword /> } />
        {/* <Route path='/forget-password/:token' element={ <ForgetPassword /> } /> */}
      </Routes>
    </>
  );
}

export default App;
