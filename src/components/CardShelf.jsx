import Card from "./CardComp.jsx"
import ComicsData from "F:/VisualStudioCode/coding/all-react/react-dc-comics/public/comics_data/comics.js"
export default function cardShelf() {
    return (
        <div className="card-shelf d-flex">
            <Card bg={ComicsData[0].thumb} title={ComicsData[0].title} />

        </div>
    );
}