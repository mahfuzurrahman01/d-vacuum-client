import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Example from '../../utilities/title';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    Example('My-review')
    fetch(`http://localhost:5000/comment?email=${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            <h1>my cart of review this one</h1>
        </div>
    );
};

export default MyReviews;