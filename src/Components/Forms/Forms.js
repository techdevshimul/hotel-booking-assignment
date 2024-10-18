import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { categoryFormUrl, itemFormUrl } from '../../Redux/dataBase';

const Forms = () => {
    document.title = "Forms - Hotel Booking App";
    return (
        <div>
            <Link to={itemFormUrl}>
                <Button color="success" style={{ width: "120px", margin: "5px" }}>RoomForm</Button>
            </Link>
            <Link to={categoryFormUrl}>
                <Button color="success" style={{ width: "120px", margin: "5px" }}>CategoryForm</Button>
            </Link>
        </div>
    )
}

export default Forms