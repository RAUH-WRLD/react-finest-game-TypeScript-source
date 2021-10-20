import React from "react";
import PostItem from "../../../Utils/ReusableComponents/PostItem";
import {Link} from "react-router-dom";
class MainLatestPreviewsSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="latest-previews">
                <div className="latest-previews__wrapper">
                    <div className="latest-previews__content font-style-2">
                        <div className="latest-previews__content_title">
                            <h3>{infoData.title}</h3>
                            <Link to={hrefs.previewsTitleLink} className="font-style-1">
                                {infoData.titleLink}
                            </Link>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md 6 col-lg-6 latest-previews__item_left">
                                <PostItem href={hrefs.postItem_1} srcItem={infoData.latestPreviewsItem_1} />
                            </div>
                            <div className="col-sm-12 col-md 6 col-lg-6 latest-previews__item_right">
                                <PostItem href={hrefs.postItem_2} srcItem={infoData.latestPreviewsItem_2} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md 6 col-lg-6 latest-previews__item_left">
                                <PostItem href={hrefs.postItem_3} srcItem={infoData.latestPreviewsItem_3} />
                            </div>
                            <div className="col-sm-12 col-md 6 col-lg-6 latest-previews__item_right">
                                <PostItem href={hrefs.postItem_4} srcItem={infoData.latestPreviewsItem_4} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainLatestPreviewsSection;
