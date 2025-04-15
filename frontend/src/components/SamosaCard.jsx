import React from 'react';
import PropTypes from 'prop-types';
import './SamosaCard.css'; // Optional: Add styles for the card

const SamosaCard = ({ name, region, price, rating, imageUrl }) => {
  return (
    <div className="samosa-card">
      <img className="samosa-card-image" src={imageUrl} alt={`${name}`} />
      <div className="samosa-card-content">
        <h2 className="samosa-card-title">{name}</h2>
        <p className="samosa-card-region">Region: {region}</p>
        <p className="samosa-card-price">Price: ${price}</p>
        <p className="samosa-card-rating">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

SamosaCard.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SamosaCard;