import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle , FaGithub , FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
                <Button variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Google</Button>
                <div>
                    <h4>Find us on</h4>
                    <ListGroup>
                        <ListGroup.Item variant='primary'><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                        <ListGroup.Item variant='warning'><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                        <ListGroup.Item variant='primary'><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    </ListGroup>
                    <QZone></QZone>
                    <div>
                        <img className='img-fluid' src={bg} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default RightNav;