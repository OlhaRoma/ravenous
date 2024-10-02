import React from 'react';
import './Business.css';

function Business({ business }) {
    return (
        <div className='business'>
            <div className='image'>
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className='information'>
                <div className='address'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}</p>
                    <p>{business.zipCode}</p>
                </div>
                <div className='details'>
                    <h3>{business.category}</h3>
                    <p>{business.rating}</p>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>);
}

export default Business;