import React from "react";
import MainTagsSection from "./MainTagsSection";
import MainLatestNewsItemInfo from "./MainLatestNewsItemInfo";
class MainLatestNewsItem_1 extends React.Component<any, any> {
    render() {
        const {srcItem, infoData, hrefs} = this.props;
        return (
            <div className="post-news">
                <article className="latest-news__item">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="latest-news__item_image">
                                <img src={srcItem.image} alt={srcItem.alt} />
                                <div className="latest-news__item_overview">
                                    <p>{srcItem.imageCategory}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <MainLatestNewsItemInfo hrefs={hrefs} srcItem={srcItem} infoData={infoData} />
                        </div>
                    </div>
                </article>
                <MainTagsSection infoData={infoData} />
            </div>
        );
    }
}
export default MainLatestNewsItem_1;
