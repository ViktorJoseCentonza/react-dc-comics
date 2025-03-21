import Card from "./CardComp.jsx"
import ComicsData from "../assets/comics_data/comics.js"
export default function cardShelf() {
    return (
        <div className="card-shelf d-flex">
            <div className="series-header">
                <h2>CURRENT SERIES</h2>
            </div>
            <Card img={ComicsData[0].thumb} title={ComicsData[0].title} />
            <Card img={ComicsData[1].thumb} title={ComicsData[1].title} />
            <Card img={ComicsData[2].thumb} title={ComicsData[2].title} />
            <Card img={ComicsData[3].thumb} title={ComicsData[3].title} />
            <Card img={ComicsData[4].thumb} title={ComicsData[4].title} />
            <Card img={ComicsData[5].thumb} title={ComicsData[5].title} />
            <Card img={ComicsData[6].thumb} title={ComicsData[6].title} />
            <Card img={ComicsData[7].thumb} title={ComicsData[7].title} />
            <Card img={ComicsData[8].thumb} title={ComicsData[8].title} />
            <Card img={ComicsData[9].thumb} title={ComicsData[9].title} />
            <Card img={ComicsData[10].thumb} title={ComicsData[10].title} />
            <Card img={ComicsData[11].thumb} title={ComicsData[11].title} />

            <button>Load More</button>
        </div>
    );
}