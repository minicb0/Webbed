import { publicRoutes, privateRoutes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					);
				})}
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;