import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Singup from "./views/Signup";
import Dashboard from "./views/Dashboard";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/signup',
    element: <Singup />
  },
  {
    path:'/dashboard',
    element: <Dashboard />
  }
])

export default router;