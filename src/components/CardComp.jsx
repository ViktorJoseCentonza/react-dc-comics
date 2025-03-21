export default function Card(props) {
    return (
        <>
            <div className="card">
                {/* <div style={{ backgroundImage: "url(" + props.bg + ")" }} className="card-bg"></div> cannot style background properly */}
                <div className="img-cropper">
                    <img src={props.img} alt="comics-book" />
                </div>

                <span>{props.title.toUpperCase()}</span>
            </div>
        </>
    );
}