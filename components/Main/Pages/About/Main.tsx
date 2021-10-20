import React from "react";
import MainAboutTeamSection from "./MainAboutTeamSection";
import MainBloggersTeamSection from "./MainBloggersTeamSection";
import MainSiteChapterSection from "../../../Utils/ReusableComponents/MainSiteChapterSection";
import AsideNewsColumn from "../../../Utils/ReusableComponents/AsideNewsColumn";
class Main extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <main className="main-about">
                <MainSiteChapterSection infoData={infoData.pages.about.main.siteChapterSection} hrefs={infoData.hrefs.pages.about.siteChapter} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <MainAboutTeamSection infoData={infoData.pages.about.main.aboutTeamSection} />
                            <MainBloggersTeamSection infoData={infoData.pages.about.main.bloggersTeamSection} hrefs={infoData.hrefs.pages.about.bloggers} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <AsideNewsColumn infoData={infoData.reusableComponents.asideNews} hrefs={infoData.hrefs.aside} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Main;
