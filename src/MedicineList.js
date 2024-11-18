import React from 'react';
import MedicineItem from './MedicineItem';

function MedicineList({ medicines }) {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5em',
    padding: '2em'
  };

  return (
    <div style={listStyle}>
      {medicines.map((medicine, index) => (
        <MedicineItem
          key={index}
          name={medicine.name}
          price={medicine.price}
          inStock={medicine.inStock}
        />
      ))}
    </div>
  );
}

export default MedicineList;
