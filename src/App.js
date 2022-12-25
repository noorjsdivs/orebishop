import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/home/Header";
import NavBottom from "./components/home/NavBottom";
import Home from "./pages/Home/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <NavBottom />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
