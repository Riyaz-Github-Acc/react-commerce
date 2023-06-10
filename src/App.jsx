import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Header,
  Products,
  Footer,
  Home,
  Product,
  NewsLetter,
} from "./Components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <NewsLetter />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products/:id",
        element: <Products />,
      },

      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
