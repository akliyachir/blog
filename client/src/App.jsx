// -- tools
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// -- pages

import RootLayout from "./RootLayout";
import TestPage from "./2_Pages/01_TestPage";

// -- roots

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<TestPage />} />
    </Route>
  )
);

// -- export

export default function App() {
  return <RouterProvider router={router} />;
}
