
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import FollowsPage from "./pages/FollowsPage";

import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/authContext";

function App() {
	const { authUser, loading } = useAuthContext();
	console.log("Authenticated user:", authUser);

	if (loading) return null;

	return (
		<div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <FollowsPage /> : <Navigate to={"/login"} />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;