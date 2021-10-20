import React from "react";
import FooterNavigationUpper from "./FooterNavigationUpper";
import FooterNavigationLower from "./FooterNavigationLower";
class Footer extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <footer>
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <FooterNavigationUpper infoData={infoData.footer.footerUpper} hrefs={infoData.hrefs.footer} />
                        <FooterNavigationLower infoData={infoData.footer.footerLower} hrefs={infoData.hrefs.footer} />
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
