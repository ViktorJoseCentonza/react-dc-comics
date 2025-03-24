import NavBanner from './NavBanner.jsx'
import CardShelf from './CardShelf.jsx';
import Jumbotron from './Jumbo.jsx'
export default function Main() {
    return (
        <main>
            <Jumbotron />
            <CardShelf />
            <NavBanner />
        </main>
    );
}
