import React from "react";
import HeaderNavigationLowerMobile from "./HeaderNavigationLowerMobile";
import HeaderNavigationLowerDesktop from "./HeaderNavigationLowerDesktop";
import {Link} from "react-router-dom";
class HeaderNavigationLower extends React.Component<any, any> {
    state = {
        width: window.innerWidth,
    };
    getInnerWidth = () => window.addEventListener("resize", () => this.setState({width: screen.width}));
    componentDidMount() {
        this.getInnerWidth();
    }
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <div className="header__content_lower">
                <div className="container">
                    <div className="lower font-style-2">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-4 p-0">
                                <div className="lower__logo">
                                    <Link to={hrefs.home}>
                                        <img src={infoData.logo} alt="Finest Game" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-8 p-0">
                                <div className="lower__info">
                                    {this.state.width <= 640 ? <HeaderNavigationLowerMobile infoData={infoData} hrefs={hrefs} /> : <HeaderNavigationLowerDesktop infoData={infoData} hrefs={hrefs} />}
                                    <div className="lower__social">
                                        <a href={hrefs.facebook} target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href={hrefs.twitter} target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href={hrefs.pinterest} target="_blank">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                        <a href={hrefs.vimeo} target="_blank">
                                            <i className="fab fa-vimeo-v"></i>
                                        </a>
                                        <a href={hrefs.youtube} target="_blank">
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
export default HeaderNavigationLower;
