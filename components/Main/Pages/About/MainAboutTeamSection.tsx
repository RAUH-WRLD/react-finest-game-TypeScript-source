import React from "react";
class MainAboutTeamSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="about-team">
                <div className="about-team__content font-style-3">
                    <div className="about-team__content_title">
                        <h2>{infoData.title}</h2>
                    </div>
                    <div className="about-team__content_subtitle">
                        <h3>{infoData.subtitle}</h3>
                    </div>
                    <div className="about-team__content_info font-style-1">
                        <p>{infoData.info.text_1}</p>
                        <p>{infoData.info.text_2}</p>
                        <p>{infoData.info.text_3}</p>
                    </div>
                    <div className="about-team__content_image">
                        <img src={infoData.background} alt={infoData.alt} />
                    </div>
                </div>
            </section>
        );
    }
}
export default MainAboutTeamSection;
