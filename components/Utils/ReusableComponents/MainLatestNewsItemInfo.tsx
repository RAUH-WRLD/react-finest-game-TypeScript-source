import React from "react";
import MainNextReadingSection from "./MainNextReadingSection";
interface Props {
    hrefs: any;
    srcItem: any;
    infoData: any;
}
const MainLatestNewsItemInfo: React.FunctionComponent<Props> = (props) => {
    const {hrefs, srcItem, infoData} = props;
    return (
        <div className="latest-news__item_info">
            <div className="latest-news__item_title">
                <h2>{srcItem.title}</h2>
                {srcItem.category ? (
                    <div className="latest-news__item_overview">
                        <p>{srcItem.category}</p>
                    </div>
                ) : null}
            </div>
            <div className="latest-news__item_text font-style-1">
                <div className="latest-news__item_description">
                    <p>{srcItem.info}</p>
                </div>
                <div className="latest-news__item_date">
                    <p>
                        <span>{srcItem.by} </span>
                        <span>{srcItem.author}</span>
                    </p>
                    <p>{srcItem.date}</p>
                    <p>
                        <i className="far fa-comment"></i>
                        <span>{srcItem.comments}</span>
                    </p>
                </div>
                <MainNextReadingSection infoData={infoData} hrefs={hrefs} />
            </div>
        </div>
    );
};
export default MainLatestNewsItemInfo;
