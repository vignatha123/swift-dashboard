import React from 'react';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px' }}>
      <span>Pages: </span>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            margin: '0 5px',
            backgroundColor: page === currentPage ? '#4caf50' : '#f0f0f0',
            color: page === currentPage ? 'white' : 'black',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
