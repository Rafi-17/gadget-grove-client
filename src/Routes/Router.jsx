
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('./brands.json')
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
        ]
    }
])

export default Router;