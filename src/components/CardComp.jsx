export default function Card(props) {
    return (
        <>
            <div className="card">
                {/* <div style={{ backgroundImage: "url(" + props.bg + ")" }} className="card-bg"></div> cannot style background properly */}
                <img src={props.img} alt="comics-book" />
                <span>{props.title}</span>
            </div>
        </>
    );
}