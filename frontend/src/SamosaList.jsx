import React from 'react';
import samosaData from './data/SamosaData';
import SamosaCard from './components/SamosaCard';

const SamosaList = () => {
  return (
    <div className="samosa-list">
      {samosaData.map((samosa) => (
        <SamosaCard
          key={samosa.id}
          name={samosa.name}
          ingredients={samosa.ingredients}
          imageUrl={samosa.imageUrl}
          rating={samosa.rating}
        />
      ))}
    </div>
  );
};

export default SamosaList;