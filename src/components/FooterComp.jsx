import CtaBanner from "./CtaBanner";
import FooterNavSection from './FooterNavSection'
export default function Footer(props) {
    return (
        <footer>

            <section className="redirects d-flex">
                <div>
                    {props.FooterNavData.slice(0, 2).map((object, index) => (<FooterNavSection key={index} FooterNavData={object} />))}
                </div>

                {props.FooterNavData.slice(2, 4).map((object, index) => (<FooterNavSection key={index} FooterNavData={object} />))}

                <div className="logo-cropper">
                    <img src="/img/dc-logo-bg.png" alt="" />
                </div>



            </section>


            <CtaBanner />
        </footer>
    );
}
