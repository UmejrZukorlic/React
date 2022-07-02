import './card.css'
const Card = (props) => {
    return <div className="card">
        <div className="icon"><img src={props.logo} alt="Logo"/></div>
        <h1>{props.name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, 
            earum dolorem nisi cumque similique id voluptas
             obcaecati deserunt!
        </p>
        <button className="button">READ MORE</button>

    </div>
}
export default Card;