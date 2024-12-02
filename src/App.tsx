import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/globals/Footer";
import Header from "./components/globals/Header";

function App() {
	return (
		<>
			<Header />
			<Outlet/>
			<Footer />
		</>
	);
}

export default App;
