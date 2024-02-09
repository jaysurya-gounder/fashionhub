
const Banner = ({banner}) => {
    return (
        <header className='relative w-full h-72 max-md:h-32'>
            <img src='./Images/Cover/cover1.jpg' className='w-full h-full object-cover' />
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
            <div className='absolute w-full h-full flex justify-center items-center text-2xl top-0 left-0'><div className='w-fit h-fit font-medium text-white'>{banner}</div></div>
        </header>
    )
}

export default Banner