import Card from "../components/Card"
import ProductivityCard from "../components/ProductivityCard"

const BoostProductivity = () => {
  return (
    <section className="boost-productivity">
      <ProductivityCard  text="Browse Now"/>
      <div className="cards">
        <Card text="New Arrivals" />
      <Card text="Best Sellers" />
      </div>
    </section>
  )
}

export default BoostProductivity