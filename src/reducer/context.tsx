import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./../Data/Data";
import reducer from "./reducer";
import { Dispatch } from "react";

const url = "https://course-api.com/react-useReducer-cart-project";

// interface cart {
// 	id: string;
// 	title: string;
// 	price: string;
// 	image: string;
// 	amount: number;
// }
// [];

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,

};

type methods = {
	remove: (id: string) => void;
	clearCart: () => void;
	increase: (id: string) => void;
	decrease: (id: string) => void;
	toggleAmount: (id: string, type: string) => void;
	loading: false;
	cart: typeof cartItems;
	total: 0;
	amount: 0;
};
interface typeae{
	typee:methods
}

const AppContext = React.createContext<methods>({
	remove: (id: string) => {},
	clearCart: (): void=> {},
	increase:  (id: string): void=> {},
	decrease: (id: string): void=> {},
	toggleAmount:  (id: string, type: string): void =>{},
	loading: false,
	cart: [],
	total: 0,
	amount: 0,
});
type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	const remove = (id: string) => {
		dispatch({ type: "REMOVE", payload: id });
	};
	const increase = (id: string) => {
		dispatch({ type: "INCREASE", payload: id });
	};
	const decrease = (id: string) => {
		dispatch({ type: "DECREASE", payload: id });
	};
	const fetchData = async () => {
		dispatch({ type: "LOADING" });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: "DISPLAY_ITEMS", payload: cart });
	};
	const toggleAmount = (id: string, type: string) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
		
	}, [state.cart]);
	
	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				toggleAmount,
			}}
		>
			{children}
			
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

