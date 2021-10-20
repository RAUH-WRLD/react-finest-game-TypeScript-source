import React from "react";
import {Link} from "react-router-dom";
class MainNextReadingSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="next-reading">
                <div className="next-reading__content font-style-2">
                    <div className="next-reading__link">
                        <Link to={hrefs.nextReading}>{infoData.nextReading}</Link>
                    </div>
                    <div className="next-reading__social">
                        <a href={hrefs.facebook} target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={hrefs.twitter} target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={hrefs.rss} target="_blank">
                            <i className="fas fa-rss"></i>
                        </a>
                        <a href={hrefs.google} target="_blank">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainNextReadingSection;
