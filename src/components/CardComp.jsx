export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="comics-img" />
            <h3>{props.title}</h3>
        </div>
    );
}