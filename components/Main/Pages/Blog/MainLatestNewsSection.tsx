import React from "react";
import MainLatestNewsItem_1 from "../../../Utils/ReusableComponents/MainLatestNewsItem_1";
import MainLatestNewsItem_2 from "../../../Utils/ReusableComponents/MainLatestNewsItem_2";
import MainLatestNewsItem_3 from "../../../Utils/ReusableComponents/MainLatestNewsItem_3";
import MainLatestNewsItem_4 from "../../../Utils/ReusableComponents/MainLatestNewsItem_4";
import MainLatestNewsItem_5 from "../../../Utils/ReusableComponents/MainLatestNewsItem_5";
import MainLatestNewsItem_6 from "../../../Utils/ReusableComponents/MainLatestNewsItem_6";
class MainLatestNewsSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="latest-news">
                <div className="latest-news__wrapper">
                    <div className="latest-news__content font-style-2">
                        <div className="latest-news__content_title">
                            <h3>{infoData.title}</h3>
                        </div>
                        <div className="latest-news__content_info">
                            <MainLatestNewsItem_1 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_1} infoData={infoData} />
                            <MainLatestNewsItem_2 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_2} infoData={infoData} />
                            <MainLatestNewsItem_3 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_3} infoData={infoData} />
                            <MainLatestNewsItem_3 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_4} infoData={infoData} />
                            <MainLatestNewsItem_4 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_5} infoData={infoData} />
                            <MainLatestNewsItem_5 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_6} infoData={infoData} />
                            <MainLatestNewsItem_6 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_7} infoData={infoData} />
                            <MainLatestNewsItem_1 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_8} infoData={infoData} />
                            <MainLatestNewsItem_2 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_9} infoData={infoData} />
                            <MainLatestNewsItem_3 hrefs={hrefs} srcItem={infoData.newsItems.newsItem_10} infoData={infoData} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainLatestNewsSection;
