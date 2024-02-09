import { GoSearch } from "react-icons/go";

const Searchbar = ({isToggle}) => {
  return (
    <div className={`absolute w-1/3 start-1/3 ${(isToggle) ? 'top-[70px]' : 'top-0'} z-10 transition-all ease-in-out max-md:w-3/4 max-md:start-[11%]`}>
      <input className='w-11/12 h-10 ps-5 rounded-lg bg-primary border' placeholder='Search'/>
      <GoSearch className='absolute w-6 h-6 top-2 end-[10%] cursor-pointer' />
    </div>
  )
}

export default Searchbar
