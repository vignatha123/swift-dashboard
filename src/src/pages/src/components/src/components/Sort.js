import React from 'react';

function Sort({ setSortOrder }) {
  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Sort by Name: </label>
      <select onChange={handleChange}>
        <option value="">None</option>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>
    </div>
  );
}

export default Sort;
