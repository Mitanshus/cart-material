import { useContext, useState } from "react";
import {
	Container,
	Box,
	CardMedia,
	Typography,
	TextField,
	Stack,
	Button,
	Paper,
} from "@mui/material";
import Data from "../Data/Data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppContext, useGlobalContext } from "../reducer/context";

interface item {
	id: string;
	title: string;
	price: string;
	img: string;
	amount: number;
}

const CardItem = (props: item) => {
	const { remove, increase, decrease, toggleAmount } = useContext(AppContext);

	return (
		<>
			<Container>
				<Box sx={{ justifyContent: "space-between", display: "flex", p: 1 }}>
					<Box
						sx={{
							display: "flex",
						}}
					>
						<Box>
							<CardMedia
								component='img'
								src={props.img}
								sx={{ height: "80px", width: "80px" }}
							/>
						</Box>
						<Box>
							<Typography variant='h6'>{props.title}</Typography>
							<Typography variant='subtitle2'>{props.price}</Typography>
							<Button onClick={() => remove(props.id)}>remove</Button>
						</Box>
					</Box>
					<Stack sx={{ alignItems: "center" }}>
						<KeyboardArrowUpIcon
							onClick={() => toggleAmount(props.id, "inc")}
						/>
						<TextField value={props.amount} sx={{ width: "3rem" }} />
						<KeyboardArrowDownIcon
							onClick={() => toggleAmount(props.id, "dec")}
						/>
					</Stack>
				</Box>
			</Container>
		</>
	);
};
export default CardItem;
