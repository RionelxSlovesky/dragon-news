import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const data = useLoaderData()

    return (
        <div>
            {data}
        </div>
    );
};

export default Category;