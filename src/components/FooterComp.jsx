import CtaBanner from "./CtaBanner";

export default function Footer() {
    return (
        <footer>
            <section className="redirects d-flex"> {/*align left with dflex */}
                <div>
                    <div className="d-flex"> {/*column with wrap? */}
                        <h2>DC COMICS</h2>
                        <a href="">Characters</a>
                        <a href="">Comics</a>
                        <a href="">Movies</a>
                        <a href="">TV</a>
                        <a href="">Games</a>
                        <a href="">Videos</a>
                        <a href="">News</a>
                    </div>
                    <div className="d-flex">
                        <h2>SHOP</h2>
                        <a href="">Shop DC</a>
                        <a href="">Shop DC Collectibles</a>
                    </div>
                </div>

                <div className="d-flex">
                    <h2>DC</h2>
                    <a href="">Terms Of Use</a>
                    <a href="">Privacy policy (New)</a>
                    <a href="">Ad Choices</a>
                    <a href="">Advertising</a>
                    <a href="">Jobs</a>
                    <a href="">Subscriptions</a>
                    <a href="">Talent Workshops</a>
                    <a href="">CPSC Certificates</a>
                    <a href="">Ratings</a>
                    <a href="">Shop Help</a>
                    <a href="">Contact Us</a>
                </div>

                <div className="d-flex">
                    <h2>SITES</h2>
                    <a href="">DC</a>
                    <a href="">MAD Magazine</a>
                    <a href="">DC Kids</a>
                    <a href="">DC Universe</a>
                    <a href="">DC Power Visa</a>
                </div>
            </section>

            <CtaBanner />

        </footer>
    );
}
