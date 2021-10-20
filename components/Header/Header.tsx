import React from "react";
import HeaderNavigationUpper from "./HeaderNavigationUpper";
import HeaderNavigationLower from "./HeaderNavigationLower";
class Header extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <header>
                <div className="header__wrapper">
                    <div className="header__content">
                        <HeaderNavigationUpper infoData={infoData.header.headerUpper} hrefs={infoData.hrefs.header} />
                        <HeaderNavigationLower infoData={infoData.header.headerLower} hrefs={infoData.hrefs.header} />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
