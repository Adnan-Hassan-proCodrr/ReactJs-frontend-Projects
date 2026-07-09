import ProductCard from "../components/ProductCard"

const Products = () => {
  return (
    <section className="product-section">
<div className="title">
    <h2>Feature Product</h2>
</div>
<div className="products-container">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

    </section>
  )
}

export default Products