import React from "react";
import MainLatestNewsItemInfo from "./MainLatestNewsItemInfo";
import MainTagsSection from "./MainTagsSection";
class MainLatestNewsItem_2 extends React.Component<any, any> {
    render() {
        const {hrefs, srcItem, infoData} = this.props;
        return (
            <div className="post-news">
                <article className="latest-news__item">
                    <MainLatestNewsItemInfo hrefs={hrefs} srcItem={srcItem} infoData={infoData} />
                </article>
                <MainTagsSection infoData={infoData} />
            </div>
        );
    }
}
export default MainLatestNewsItem_2;
