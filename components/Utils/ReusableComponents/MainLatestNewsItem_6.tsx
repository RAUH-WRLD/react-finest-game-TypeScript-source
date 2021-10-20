import React from "react";
import MainNextReadingSection from "./MainNextReadingSection";
class MainLatestNewsItem_6 extends React.Component<any, any> {
    render() {
        const {infoData, srcItem, hrefs} = this.props;
        return (
            <div className="post-news">
                <article className="latest-news__item">
                    <div className="latest-news__content_item font-style-1">
                        <p>{srcItem.item}</p>
                    </div>
                </article>
                <article className="latest-news__item">
                    <MainNextReadingSection infoData={infoData} hrefs={hrefs} />
                </article>
            </div>
        );
    }
}
export default MainLatestNewsItem_6;
