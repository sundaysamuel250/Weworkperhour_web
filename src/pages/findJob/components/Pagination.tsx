// src/components/Pagination.tsx
import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    disabled={i === currentPage}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        cursor: i === currentPage ? 'default' : 'pointer',
                        backgroundColor: i === currentPage ? 'lightgray' : 'white',
                        border: '1px solid #ccc',
                        borderRadius: '3px'
                    }}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
            <button onClick={handlePrevious} disabled={currentPage === 1} className='flex items-center  border-[1px] border-[#EE009d] rounded-[5px] px-[16px] py-[8px] gap-2'>
            <BiChevronLeft size={25} /> Prevs
            </button>
            {renderPageNumbers()}
            <button onClick={handleNext} disabled={currentPage === totalPages} className='flex items-center  border-[1px] border-[#EE009d] rounded-[5px] px-[16px] py-[8px] gap-2'>
                Next <BiChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
