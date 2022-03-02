import Loader from "components/Loader";
import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const {user} = useAuth();
		const router = useRouter();

		if (user) {
			router.replace("/");
			return <Loader/>;
		}
		return <Component {...props} />;
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const {user} = useAuth();
		const router = useRouter();

		if (!user) {
			router.replace("/login");
			return <Loader/>;
		}
		return <Component {...props} />;
	};
}