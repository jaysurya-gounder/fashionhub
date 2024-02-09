import { useEffect, useState } from "react"
import Nav from "../Components/Nav"
import Searchbar from "../Components/Searchbar"
import { useDispatch, useSelector } from "react-redux"
import { setScrolled } from "../Reducers/ControlReducer"


const Header = () => {
  const [isToggle, setIsToggle] = useState(false)
  const dispatch = useDispatch();
  const { scrolled } = useSelector(state => state.controls);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      dispatch(setScrolled(scrollTop > 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);
  return (
    <div className={`${scrolled ? 'scrolled pb-16' : ''}`}>
      <header className="relative navbar">
        <Nav toggle={{ isToggle, setIsToggle }} />
        <Searchbar isToggle={isToggle} />
      </header>
    </div>
  )
}

export default Header