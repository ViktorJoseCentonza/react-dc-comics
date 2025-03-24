import Card from "./CardComp.jsx"


export default function cardShelf(props) {
    return (
        <section className="card-shelf d-flex">
            <div className="series-header">
                <h2>CURRENT SERIES</h2>
            </div>
            {
                props.ComicsData.map((object, index) => (<Card key={index} img={object.thumb} title={object.title} />))
            }
            <button>Load More</button>
        </section>
    );
}