export default function navBanner() {
    return (
        <section className="nav-banner d-flex"> {/*different component? */}
            <div className="d-flex">
                <div>
                    <img src="../public/img/buy-comics-digital-comics.png" alt="digital-comics-logo" />
                </div>
                <h4>DIGITAL COMICS</h4>
            </div>

            <div className="d-flex">
                <div>
                    <img src="../public/img/buy-comics-merchandise.png" alt="dc-merchandise-logo" />
                </div>
                <h4>DC MERCHANDISE</h4>
            </div>

            <div className="d-flex">
                <div>
                    <img src="../public/img/buy-comics-subscriptions.png" alt="subscriptions-logo" />
                </div>
                <h4>SUBSCRIPTION</h4>
            </div>

            <div className="d-flex">
                <div>
                    <img src="../public/img/buy-comics-shop-locator.png" alt="shop-locator-logo" />
                </div>
                <h4>COMIC SHOP LOCATOR</h4>
            </div>

            <div className="d-flex">
                <div>
                    <img src="../public/img/buy-dc-power-visa.svg" alt="dc-power-visa-logo" />
                </div>
                <h4>DC POWER VISA</h4>
            </div>
        </section>
    );
}



