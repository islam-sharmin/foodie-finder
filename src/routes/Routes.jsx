import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import UserProfile from "../pages/UserProfile/UserProfile";
import Reservation from "../pages/Reservation/Reservation";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`/restaurants.json`)
        },
        {
          path:'/restaurant/:id',
          element: <PrivateRoute><RestaurantDetails></RestaurantDetails></PrivateRoute>,
          loader: () => fetch(`/restaurants.json`)
        },
        {
          path: '/updateprofile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: '/userprofile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: '/contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/reservation',
          element: <PrivateRoute><Reservation></Reservation></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;