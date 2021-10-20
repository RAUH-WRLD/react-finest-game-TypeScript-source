import React from "react";
import StartNewsItem from "../../../Utils/ReusableComponents/StartNewsItem";
class MainStartNewsSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="start-news">
                <div className="start-news__wrapper">
                    <div className="start-news__content font-style-2">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <div className="start-news__items">
                                    <StartNewsItem href={hrefs.newsItem_1} srcItem={infoData.startNewsItem_1} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <div className="start-news__items">
                                    <StartNewsItem href={hrefs.newsItem_2} srcItem={infoData.startNewsItem_2} />
                                    <StartNewsItem href={hrefs.newsItem_3} srcItem={infoData.startNewsItem_3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainStartNewsSection;
