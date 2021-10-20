import React from "react";
import MainStartNewsSection from "./MainStartNewsSection";
import MainLatestNewsSection from "./MainLatestNewsSection";
import MainLatestVideosSection from "./MainLatestVideosSection";
import MainLatestPreviewsSection from "./MainLatestPreviewsSection";
import MainLatestReviewsSection from "./MainLatestReviewsSection";
import MainReleasesSection from "./MainReleasesSection";
import MainNewsletterSection from "./MainNewsletterSection";
import AsideNewsColumn from "../../../Utils/ReusableComponents/AsideNewsColumn";
import AsidePostsColumn from "../../../Utils/ReusableComponents/AsidePostsColumn";
import Pagination from "../../../Utils/ReusableComponents/Pagination";
class Main extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <main className="main-home">
                <MainStartNewsSection infoData={infoData.pages.home.main.startNewsSection} hrefs={infoData.hrefs.pages.home.startNewsSection} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <MainLatestNewsSection infoData={infoData.pages.home.main.latestNewsSection} hrefs={infoData.hrefs.pages.home.latestNewsSection} />
                            <MainLatestVideosSection infoData={infoData.pages.home.main.latestVideosSection} hrefs={infoData.hrefs.pages.home.latestVideosSection} />
                            <MainLatestPreviewsSection infoData={infoData.pages.home.main.latestPreviewsSection} hrefs={infoData.hrefs.pages.home.latestPreviewsSection} />
                            <MainLatestReviewsSection infoData={infoData.pages.home.main.latestReviewsSection} hrefs={infoData.hrefs.pages.home.latestReviewsSection} />
                            <Pagination infoData={infoData.reusableComponents.pagination} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <AsideNewsColumn infoData={infoData.reusableComponents.asideNews} hrefs={infoData.hrefs.aside} />
                            <AsidePostsColumn infoData={infoData.reusableComponents.asidePosts} hrefs={infoData.hrefs.aside} />
                        </div>
                    </div>
                </div>
                <MainReleasesSection infoData={infoData.pages.home.main.releasesSection} />
                <MainNewsletterSection infoData={infoData.pages.home.main.emailSection} />
            </main>
        );
    }
}
export default Main;
