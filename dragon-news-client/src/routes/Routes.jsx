

import {
    createBrowserRouter
} from 'react-router-dom'
import Home from '../components/Pages/Home/Home.jsx';
import Main from '../components/Layout/Main.jsx';
import Category from '../components/Pages/Home/Category/Category.jsx';
import NewsLayout from '../components/Layout/NewsLayout.jsx';
import News from '../components/Pages/News/News.jsx'


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
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.Id}`),
            }
        ]
    },
    {
        path: '/news/:Id',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:Id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.Id}`)
            }
        ]
    }
])


export default router