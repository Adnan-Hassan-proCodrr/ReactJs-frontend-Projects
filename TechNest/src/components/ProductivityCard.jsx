import Button from './Button'

const ProductivityCard = ({text}) => {
  return (
    <div className="productivity-card">
<h2>Boost Productivity</h2>
      <p>Discover how our products can help you work smarter, not harder.</p>
      <Button text={text}/>
    </div>
  )
}

export default ProductivityCard