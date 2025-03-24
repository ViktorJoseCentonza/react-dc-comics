export default function FooterNavSection(props) {
    return (
        <div className="d-flex" >

            <h2>{props.FooterNavData.category}</h2>
            {props.FooterNavData.links.map((object, index) => (<a key={index} href={object.url}>{object.title}</a>))}

        </div>
    )
}