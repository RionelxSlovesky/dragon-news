import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

const LeftNav = () => {

    const [categories, setCategorie] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategorie(data))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h4>All Categories</h4>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className='text-secondary d-block p-4 text-decoration-none' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftNav;