import Button from "./Button"

const Card = ({text}) => {
  return (
    <div className="card">
        <h2>Card Title</h2>
        <Button text={text} />
    </div>
  )
}

export default Card