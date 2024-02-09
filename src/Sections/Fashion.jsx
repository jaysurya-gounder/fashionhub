import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import Banner from '../Components/Banner';

const Fashion = ({ banner, totalItems, itemsPerPage, onPageChange, currentPage, children }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        const numbers = [];
        for (let i = 1; i <= totalPages; i++) {
            numbers.push(i);
        }
        setPageNumbers(numbers);
    }, [totalPages]);


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <main className='relative w-full h-fit border-t border-gray-400'>
            <Banner banner={banner} />
            <section className='container m-auto my-14 max-md:w-[90%]'>
                <div className='w-full h-fit flex justify-between items-center leading-[17px]'>
                    <div className='w-fit h-fit flex text-gray-400 cursor-pointer hover:text-blue-400'><CiFilter className='w-5 h-5 me-[2px]' />Filter</div>
                    <select className='w-[15%] px-2 py-2 rounded-full text-gray-400 border border-gray-400 max-md:w-1/3'>
                        <option className=''>Featured</option>
                    </select>
                </div>
                <div className='w-full h-fit mt-14'>
                    {children}
                </div>
                <hr className={`w-full h-[1.5px] bg-gray-300 my-10 ${(totalPages === 1 ? 'hidden' : '')}`} />
                <div className={`w-full h-fit text-center font-medium justify-center text-gray-500 flex gap-10 ${(totalPages === 1 ? 'hidden' : '')}`}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`${currentPage === 1 ? "hidden" : ''}`}
                    >
                        Previous
                    </button>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            className={number === currentPage ? "text-red-500" : ""}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`${currentPage === totalPages ? "hidden" : ''}`}
                    >
                        Next
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Fashion
