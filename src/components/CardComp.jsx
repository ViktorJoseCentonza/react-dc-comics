export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="img-cropper">
                    <img src={props.img} alt="comics-book" />
                </div>

                <span>{props.title.toUpperCase()}</span>
            </div>
        </>
    );
}