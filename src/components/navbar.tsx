import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useGlobalContext } from "../reducer/context";

const Navbar = () => {
	const { cart } = useGlobalContext();
	return (
		<AppBar position='static' elevation={8}>
			<Container maxWidth='xl' sx={{ background: "blue" }}>
				<Toolbar disableGutters>
					<Container
						sx={{
							display: { xs: "flex", md: "flex", xl: "flex" },
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography
							variant='h6'
							sx={{
								fontFamily: "BlinkMacSystemFont",
								color: "white",
							}}
						>
							UseReducer
						</Typography>
					</Container>

					<Container
						sx={{
							alignContent: "right",
							display: "flex",
							justifyContent: "right",
						}}
					>
						<ShoppingBasketIcon></ShoppingBasketIcon>
						<Typography>{cart.length}</Typography>
					</Container>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
