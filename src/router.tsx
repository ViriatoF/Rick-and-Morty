import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Detail from "./components/pages/Detail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
				loader: () => fetch("https://rickandmortyapi.com/api/character"),
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "detail/:id",
				element: <Detail />,
				loader: ({ params }) =>
					fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
			},
		],
	},
]);

export default router;
