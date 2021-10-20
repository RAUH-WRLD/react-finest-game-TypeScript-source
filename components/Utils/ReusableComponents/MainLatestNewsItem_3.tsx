import React from "react";
import MainLatestNewsItemInfo from "./MainLatestNewsItemInfo";
import MainTagsSection from "./MainTagsSection";
class MainLatestNewsItem_3 extends React.Component<any, any> {
    render() {
        const {hrefs, infoData, srcItem} = this.props;
        return (
            <div className="post-news">
                <article className="latest-news__item">
                    <iframe src={srcItem.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </article>
                <article className="latest-news__item">
                    <MainLatestNewsItemInfo hrefs={hrefs} srcItem={srcItem} infoData={infoData} />
                </article>
                <MainTagsSection infoData={infoData} />
            </div>
        );
    }
}
export default MainLatestNewsItem_3;
