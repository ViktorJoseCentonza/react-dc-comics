export default function Footer() {
    return (
        <footer>
            <section> {/*different component? */}
                <div>
                    <div>
                        <img src="../public/img/buy-comics-digital-comics.png" alt="digital-comics-logo" />
                        <h4>DIGITAL COMICS</h4>
                    </div>

                    <div>
                        <img src="../public/img/buy-comics-merchandise.png" alt="dc-merchandise-logo" />
                        <h4>DC MERCHANDISE</h4>
                    </div>

                    <div>
                        <img src="../public/img/buy-comics-subscriptions.png" alt="subscriptions-logo" />
                        <h4>SUBSCRIPTION</h4>
                    </div>

                    <div>
                        <img src="../public/img/buy-comics-shop-locator.png" alt="shop-locator-logo" />
                        <h4>COMIC SHOP LOCATOR</h4>
                    </div>

                    <div>
                        <img src="../public/img/buy-dc-power-visa.svg" alt="dc-power-visa-logo" />
                        <h4>DC POWER VISA</h4>
                    </div>
                </div>
            </section>
            <section> {/*align left with dflex */}
                <div> {/*column with wrap? */}
                    <h2>DC COMICS</h2>
                    <a href="">Characters</a>
                    <a href="">Comics</a>
                    <a href="">Movies</a>
                    <a href="">TV</a>
                    <a href="">Games</a>
                    <a href="">Videos</a>
                    <a href="">News</a>
                </div>
                <div>
                    <h2>SHOP</h2>
                    <a href="">Shop DC</a>
                    <a href="">Shop DC Collectibles</a>
                </div>
                <div>
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
                <div>
                    <h2>SITES</h2>
                    <a href="">DC</a>
                    <a href="">MAD Magazine</a>
                    <a href="">DC Kids</a>
                    <a href="">DC Universe</a>
                    <a href="">DC Power Visa</a>
                </div>
            </section>
            {/*second component for signup cta? */}
            <section>
                <div>
                    <button>
                        SIGN-UP NOW!
                    </button>
                </div>
                <div>
                    <h2>FOLLOW US</h2>
                    <a href=""><img src="../public/img/footer-facebook.png" alt="" /></a>
                    <a href=""><img src="../public/img/footer-twitter.png" alt="" /></a>
                    <a href=""><img src="../public/img/footer-youtube.png" alt="" /></a>
                    <a href=""><img src="../public/img/footer-pinterest.png" alt="" /></a>
                    <a href=""><img src="../public/img/footer-periscope.png" alt="" /></a>
                </div>
            </section>
        </footer>
    );
}
