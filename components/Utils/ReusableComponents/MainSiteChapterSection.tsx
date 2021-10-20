import React from "react";
import {Link} from "react-router-dom";
class MainSiteChapterSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="chapter">
                <div className="chapter__wrapper">
                    <div className="container">
                        <div className="chapter__content font-style-1">
                            <div className="previous-page">
                                <Link to={hrefs.prev}>{infoData.previousPage}</Link>
                            </div>
                            <div className="separator">
                                <p>{infoData.separator}</p>
                            </div>
                            <div className="current-page">
                                <Link to={hrefs.current}>{infoData.currentPage}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainSiteChapterSection;
