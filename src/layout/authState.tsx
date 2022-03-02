import Loader from "components/Loader";
import React, { useEffect, useState } from "react";
import { auth } from "src/config/firebase.config";
import useAuth from "src/hooks/auth";

export default function AuthStateChanged({ children }) {
	const { setUser } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <Loader/>;
	}

	return children;
}