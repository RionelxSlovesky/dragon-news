

import {
    createBrowserRouter
} from 'react-router-dom'
import Home from '../components/Pages/Home/Home.jsx';
import Main from '../components/Layout/Main.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])


export default router