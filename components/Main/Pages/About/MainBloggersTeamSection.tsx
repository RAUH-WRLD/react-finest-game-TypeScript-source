import React from "react";
import BloggerItem from "../../../Utils/ReusableComponents/BloggerItem";
class MainBloggersTeamSection extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <section className="about-bloggers">
                <div className="about-bloggers__content font-style-1">
                    <div className="about-bloggers__content_title font-style-3">
                        <h2>{infoData.title}</h2>
                    </div>
                    <div className="about-bloggers__content_subtitle">
                        <h3>{infoData.subtitle}</h3>
                    </div>
                    <div className="about-bloggers__content_info">
                        <p>{infoData.info.text_1}</p>
                    </div>
                    <div className="about-bloggers__content_items">
                        <BloggerItem href={hrefs.bloggerItem_1} srcItem={infoData.bloggers.blogger_1} />
                        <BloggerItem href={hrefs.bloggerItem_2} srcItem={infoData.bloggers.blogger_2} />
                        <BloggerItem href={hrefs.bloggerItem_3} srcItem={infoData.bloggers.blogger_3} />
                    </div>
                </div>
            </section>
        );
    }
}
export default MainBloggersTeamSection;
