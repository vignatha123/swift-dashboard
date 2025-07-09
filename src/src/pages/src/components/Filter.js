import React from 'react';

function Filter({ setFilterRole }) {
  const handleChange = (e) => {
    setFilterRole(e.target.value);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Filter by Role: </label>
      <select onChange={handleChange}>
        <option value="">All</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
}

export default Filter;
