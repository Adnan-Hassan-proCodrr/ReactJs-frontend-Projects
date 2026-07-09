import Button from "./Button"

const ProductCard = ({ProductsList}) => {
  return (
    <div className="product-card">
<div className="product-image">
<img src={ProductsList.image} alt={ProductsList.name} />
</div>
<div className="product-content">
    <h3>{ProductsList.name}</h3>
    <p>${ProductsList.price.toFixed(2)}</p>
</div>
<Button text="Add to Cart" />
    </div>
  )
}

export default ProductCard