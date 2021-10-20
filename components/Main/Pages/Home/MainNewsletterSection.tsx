import React from "react";
class MainNewsletterSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="newsletter">
                <div className="newsletter__wrapper">
                    <div className="newsletter__content font-style-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="newsletter__title">
                                        <h4>{infoData.title}</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="newsletter__form font-style-1">
                                        <form action="">
                                            <input type="email" placeholder={infoData.placeholder} className="newsletter"></input>
                                            <button type="submit" className="newsletter-btn">
                                                <i className="fas fa-envelope"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainNewsletterSection;
