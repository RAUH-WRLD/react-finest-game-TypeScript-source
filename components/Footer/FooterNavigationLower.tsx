import React from "react";
class FooterNavigationLower extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <div className="footer__content_lower">
                <div className="container">
                    <div className="lower font-style-1">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                                <div className="lower__title">
                                    <h1>
                                        <span>{infoData.text_1}</span> <span>{infoData.text_2}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                                <div className="lower__info">
                                    <div className="lower__social">
                                        <a href={hrefs.social.facebook} target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href={hrefs.social.twitter} target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href={hrefs.social.pinterest} target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                        <a href={hrefs.social.vimeo} target="_blank">
                                            <i className="fab fa-vimeo-v"></i>
                                        </a>
                                        <a href={hrefs.social.youtube} target="_blank">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FooterNavigationLower;
