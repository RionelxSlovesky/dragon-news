import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData()
    const { image_url, title, details, category_id } = news

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="danger">All News In This Category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;