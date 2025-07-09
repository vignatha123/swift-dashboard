import React, { useState } from 'react';
import data from '../data';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

function HomePage() {
  const [filterRole, setFilterRole] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtering
  const filteredData = filterRole
    ? data.filter((item) => item.role === filterRole)
    : data;

  // Sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    if (sortOrder === 'desc')
