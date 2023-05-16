import { LinearProgress, Skeleton } from "@mui/material";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/navbar";
import { useGlobalContext } from "./reducer/context";

function App() {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<>
				<Skeleton variant='text' sx={{ fontSize: "8rem" }} />
				<Skeleton variant='rectangular' height={60} />

				<Skeleton variant='rounded' height={500} />
			</>
		);
	}
	return (
		<>
			<Navbar />
			<CardContainer />
		</>
	);
}

export default App;
