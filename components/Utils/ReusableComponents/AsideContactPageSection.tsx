import React from "react";
class AsideContactPageSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="contact">
                <div className="contact__content">
                    <div className="contact__title">
                        <h3>{infoData.title}</h3>
                    </div>
                    <div className="contact__info">
                        <iframe src={infoData.src}></iframe>
                    </div>
                </div>
            </section>
        );
    }
}
export default AsideContactPageSection;
