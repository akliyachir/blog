// -- tools
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// -- pages

import RootLayout from "./RootLayout";

// -- roots

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);

// -- export

export default function App() {
  return <RouterProvider router={router} />;
}
