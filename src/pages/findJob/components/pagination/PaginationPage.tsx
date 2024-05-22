// src/App.tsx
import React, { useState } from 'react';
import Pagination from '../Pagination';


const PaginationPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4; // This should be dynamically determined based on your data

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ padding: '30px' }}>
            <h1>My Paginated List</h1>
            {/* Render your paginated data here */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default PaginationPage;
