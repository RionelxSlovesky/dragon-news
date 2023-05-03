

import {
    createBrowserRouter
} from 'react-router-dom'
import Home from '../components/Pages/Home/Home.jsx';
import Main from '../components/Layout/Main.jsx';
import Category from '../components/Pages/Home/Category/Category.jsx';
import NewsLayout from '../components/Layout/NewsLayout.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:Id',
                element: <Category></Category>,
                loader: ({params}) => {console.log(params.Id)
                return <h2>{params.Id}</h2>
                },
            }
        ]
    },
    {
        path: '/news/:Id',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':Id'
            }
        ]
    }
])


export default router