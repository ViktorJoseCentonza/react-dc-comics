import NavBannerCard from "./NavBannerCard";

export default function navBanner(props) {
    return (
        <div className="nav-banner">
            <section className="d-flex">
                {
                    props.SubNavData.map((object, index) => (<NavBannerCard key={index} SubNavData={object} />))
                }
            </section>
        </div>
    );
}



