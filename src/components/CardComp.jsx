export default function Card(props) {
    return (
        <div style={{ backgroundImage: "url(" + props.bg + ")" }} className="card-img">

            <h3>{props.title}</h3>
        </div>
    );
}