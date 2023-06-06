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
import AboutUs from "./2_Pages/02_AboutUs";
import BlogLanding from "./2_Pages/03_BlogLanding";

// -- roots

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="/" element={<TestPage />} /> */}
      <Route path="/" element={<BlogLanding />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<BlogLanding />} />
    </Route>
  )
);

// -- export

export default function App() {
  return <RouterProvider router={router} />;
}
