export default function (props) {
    return (

        <a className="d-flex" href={props.SubNavData.url}>
            <img src={props.SubNavData.imgSrc} alt={props.SubNavData.altText} />

            <h4>{props.SubNavData.title}</h4>
        </a>

    )

}