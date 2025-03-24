import Card from "./CardComp.jsx"
import ComicsData from "../assets/data/comics_data.js"


export default function cardShelf() {
    return (
        <section className="card-shelf d-flex">
            <div className="series-header">
                <h2>CURRENT SERIES</h2>
            </div>
            {
                ComicsData.map((object, index) => (<Card key={index} img={object.thumb} title={object.title} />))
            }
            <button>Load More</button>
        </section>
    );
}