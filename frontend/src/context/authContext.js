import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import config from "../config";

export const AuthContext = createContext();


export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUserLoggedIn = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${config.endpoint}/api/auth/check`);
				const data = await res.json();
				setAuthUser(data.user); // null or authenticated user object
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		checkUserLoggedIn();
	}, []);

	return <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>{children}</AuthContext.Provider>;
};