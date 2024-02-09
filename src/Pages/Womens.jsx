import Card from "../Components/Card"
import Fashion from "../Sections/Fashion"
import Header from "../Sections/Header"
import Footers from "../Sections/Footers"
import { useSelector } from "react-redux"
import { useState } from "react"
import PopBox from "../Components/PopBox"

const Womens = () => {
  const womens = useSelector(state => state.products.womens)
  const totalItems = womens.length;
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderDataForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return womens.slice(startIndex, endIndex);
  };
  return (
    <>
      <Header />
      <Fashion
        banner={'Womens'}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      >
        <div className="w-full h-fit grid grid-cols-4 gap-y-10 gap-x-5 max-md:grid-cols-2 max-md:gap-y-5">
          {renderDataForCurrentPage().map((products) => (
            <Card key={products.id} products={products} />
          ))}
        </div>
      </Fashion>
      <PopBox />
      <Footers />
    </>
  )
}

export default Womens
