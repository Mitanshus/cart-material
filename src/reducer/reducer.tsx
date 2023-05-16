import CartItems from "./../Data/Data";

type cartItems = {
	id: string;
	title: string;
	price: number;
	image: string;
	amount: number;
};
const initialState = {
	loading: false,
	cart: CartItems,
	total: 0,
	amount: 0,
};

const reducer = (state: typeof initialState|any, action: any) => {
	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}
	if (action.type === "REMOVE") {
		return {
			...state,
			
			
			cart: state.cart.filter(
				(cartItem: cartItems) => cartItem.id !== action.payload
			),
			
		};
	}
	if (action.type === "INCREASE") {
		let tempCart = state.cart.map((cartItem: cartItems) => {
			if (cartItem.id === action.payload) {
				return { ...cartItem, amount: cartItem.amount + 1 };
			}
			return cartItem;
		});
		return { ...state, cart: tempCart };
	}
	if (action.type === "DECREASE") {
		let tempCart = state.cart
			.map((cartItem: cartItems) => {
				if (cartItem.id === action.payload) {
					return { ...cartItem, amount: cartItem.amount - 1 };
				}
				return cartItem;
			})
			.filter((cartItem: cartItems) => cartItem.amount !== 0);
		return { ...state, cart: tempCart };
	}
	if (action.type === "GET_TOTALS") {

			let { total, amount } = state.cart.reduce(
				(cartTotal: typeof initialState, cartItem: cartItems) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;
					
					cartTotal.total += itemTotal;
					cartTotal.amount += amount;
					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
				);
				total = parseFloat(total.toFixed(2));
				
				return { ...state, total, amount };
			
	}
	if (action.type === "LOADING") {
		return { ...state, loading: true };
	}
	if (action.type === "DISPLAY_ITEMS") {
		return { ...state, cart:action.payload, loading: false };
		
	}
	if (action.type === "TOGGLE_AMOUNT") {
		let tempCart = state.cart
			.map((cartItem: cartItems) => {
				if (cartItem.id === action.payload.id) {
					if (action.payload.type === "inc") {
						return { ...cartItem, amount: cartItem.amount + 1 };
					}
					if (action.payload.type === "dec") {
						return { ...cartItem, amount: cartItem.amount - 1 };
					}
				}
				return cartItem;
			})
			.filter((cartItem: cartItems) => cartItem.amount !== 0);
		return { ...state, cart: tempCart };
	}
	throw new Error("no matching action type");
};

export default reducer;
