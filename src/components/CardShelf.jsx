import Card from "./CardComp.jsx"
import ComicsData from "F:/VisualStudioCode/coding/all-react/react-dc-comics/public/comics_data/comics.js"
export default function cardShelf() {
    return (
        <>
            <Card img={ComicsData[0].img} content={ComicsData[0].title} />

            <Card img={ComicsData[1].img} content={ComicsData[1].title} />
        </>
    );
}