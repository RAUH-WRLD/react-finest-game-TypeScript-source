import React from "react";
import {Link} from "react-router-dom";
interface Props {
    infoData: any;
    hrefs: any;
}
class HeaderNavigationUpper extends React.Component<any, any> {
    private searchRef: any;
    private searchFormRef: any;
    constructor(props: Props) {
        super(props);
        this.searchFormRef = React.createRef();
        this.searchRef = React.createRef();
    }
    search = () => {
        const input = this.searchRef.current;
        const form = this.searchFormRef.current;
        form.removeAttribute("action");
        return form.setAttribute("action", `#${input.value}`);
    };
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <div className="header__content_upper">
                <div className="container">
                    <div className="upper font-style-1">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                                <div className="upper__title">
                                    <h1>
                                        <span>{infoData.text_1}</span> <span>{infoData.text_2}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                                <div className="upper__info">
                                    <div className="upper__navigation">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to={hrefs.about}>{infoData.text_3}</Link>
                                                </li>
                                                <li>
                                                    <Link to={hrefs.contact}>{infoData.text_4}</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="upper__search">
                                        <form action="" ref={this.searchFormRef} onSubmit={() => this.search()}>
                                            <input type="search" placeholder={infoData.text_5} className="search" ref={this.searchRef} />
                                            <button className="search-btn" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </form>
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
export default HeaderNavigationUpper;
