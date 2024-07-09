import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ExplorePage from "./pages/ExplorePage";
import FollowsPage from "./pages/FollowsPage";
import Sidebar from "./components/Sidebar";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className='flex text-white'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/explore' element={<ExplorePage />}/>
          <Route path='/follows' element={<FollowsPage />}/>
        </Routes>
        <Toaster />
      </div>
Hello World
    </div>
  );
}

export default App;
