import React, { useState } from 'react'
import { trending } from '../Data/Products'
import Card from './Card'

const Trending = () => {
    const [data, setData] = useState(trending);
    const [visibleItems, setVisibleItems] = useState(8);
    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
        setData(prevData => [...prevData, ...trending]);
    };
    return (
        <div>
            <section className='w-full h-fit'>
                <div className='container h-fit max-md:w-[90%]'>
                    <div className='w-full h-10 flex justify-center items-center'>
                        <hr className='w-1/6 h-1 bg-gray-400' />
                        <div className='w-fit h-hit mx-10 text-2xl font-medium'>TRENDING</div>
                        <hr className='w-1/6 h-1 bg-gray-400' />
                    </div>
                    <div className='w-full h-fit grid grid-cols-4 gap-y-10 gap-x-5 mt-16 max-md:grid-cols-2 max-md:gap-y-5'>
                        {data.slice(0, visibleItems).map((trend) => (
                            <Card key={trend.id} products={trend} />
                        ))}
                    </div>
                    <div className='w-full h-fit text-center my-10'>
                        <button onClick={handleLoadMore} className='w-fit h-fit px-7 py-2 rounded-full text-black font-medium border-2 border-black'>Load more</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trending