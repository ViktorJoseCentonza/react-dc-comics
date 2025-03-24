export default function Header(props) {
    return (
        <header>
            <section className="d-flex">
                <div className="logo-wrapper">
                    <img src="/img/dc-logo.png" alt="dc-logo" />
                </div>
                <div className="main-nav">
                    {props.MainNavData.map((object, index) => <a key={index} href={object.url}>{object.title}</a>)}
                </div>
            </section>
        </header>
    );
}
