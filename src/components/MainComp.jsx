import NavBanner from './NavBanner.jsx'
import CardShelf from './CardShelf.jsx';
import Jumbotron from './Jumbo.jsx'

export default function Main(props) {
    return (
        <main>
            <Jumbotron />
            <CardShelf ComicsData={props.ComicsData} />
            <NavBanner SubNavData={props.SubNavData} />
        </main>
    );
}
