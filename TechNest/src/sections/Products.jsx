import ProductCard from "../components/ProductCard"

const Products = () => {
  const productsList =  [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "images/wireless-headphone.jpg",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 49.99,
    image: "images/gaming-mouse.jpg",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 79.99,
    image: "images/mechanical-keyboard.jpg",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: "images/smart-watch.jpg",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "images/blutooth-speaker.jpg",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 35.99,
    image: "images/laptop-stand.jpg",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 49.99,
    image: "images/gaming-mouse.jpg",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 79.99,
    image: "images/mechanical-keyboard.jpg",
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 199.99,
    image: "images/smart-watch.jpg",
  }, 
   {
    id: 10,
    name: "Mechanical Keyboard",
    price: 79.99,
    image: "images/mechanical-keyboard.jpg",
  },
  
];
  return (
    <section className="product-section">
<div className="title">
    <h2>Feature Product</h2>
</div>
<div className="products-container">
{
  productsList.map((product) => (
    <ProductCard key={product.id} ProductsList={product} />
  ))
}
</div>

    </section>
  )
}

export default Products