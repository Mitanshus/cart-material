import {
	Stack,
	Typography,
	Button,
	Container,
	Paper,
	Card,
} from "@mui/material";
import React, { useContext } from "react";
import CardItem from "./CartItem";
import { AppContext, useGlobalContext } from "./../reducer/context";
import { Box, fontFamily } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const CardContainer = () => {
	const { cart, total, clearCart } = useContext(AppContext);
	if (cart.length === 0) {
		return (
			<>
				<Box
					sx={{
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
						fontFamily: "BlinkMacSystemFont",
					}}
				>
					<Typography
						variant='h3'
						sx={{
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							p: 4,
						}}
					>
						Your Bag is Empty
					</Typography>
				</Box>
			</>
		);
	}
	return (
		<>
			<Container sx={{ p: 1 }}>
				<Card >
					<Box
						sx={{
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							fontFamily: "BlinkMacSystemFont",
						}}
					>
						<Typography
							variant='h3'
							sx={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								p: 4,
							}}
						>
							Your Bag
						</Typography>
					</Box>
					<Box sx={{}}>
						{cart.map((item) => {
							return <CardItem key={item.id} {...item} />;
						})}
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
						<Typography variant='h4' sx={{ fontFamily: "BlinkMacSystemFont" }}>
							total
						</Typography>
						<Typography>{total}</Typography>
					</Box>
				</Card>
			</Container>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					justifyContent: "center",
					p: 2,
				}}
			>
				<Button variant='outlined' color='error' onClick={clearCart}>
					Clear Cart
				</Button>
			</Box>
		</>
	);
};

export default CardContainer;
