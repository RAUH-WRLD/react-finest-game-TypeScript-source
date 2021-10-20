import React from "react";
import {Link} from "react-router-dom";
class MainLatestVideosSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="latest-videos">
                <div className="latest-videos__wrapper">
                    <div className="latest-videos__content font-style-2">
                        <div className="latest-videos__content_title">
                            <h3>{infoData.title}</h3>
                            <Link to={hrefs.videosTitleLink} className="font-style-1">
                                {infoData.titleLink}
                            </Link>
                        </div>
                        <div className="latest-videos__content_player">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <iframe src={infoData.src_1} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <iframe src={infoData.src_2} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainLatestVideosSection;
