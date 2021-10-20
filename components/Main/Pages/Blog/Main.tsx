import React from "react";
import MainSiteChapterSection from "../../../Utils/ReusableComponents/MainSiteChapterSection";
import MainLatestNewsSection from "./MainLatestNewsSection";
import AsideNewsColumn from "../../../Utils/ReusableComponents/AsideNewsColumn";
import Pagination from "../../../Utils/ReusableComponents/Pagination";
import AsideBlogPostsColumn from "./AsideBlogPostsColumn";
class Main extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <main className="main-blog">
                <MainSiteChapterSection infoData={infoData.pages.blog.main.siteChapterSection} hrefs={infoData.hrefs.pages.blog.siteChapter} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <MainLatestNewsSection infoData={infoData.pages.blog.main.latestNewsSection} hrefs={infoData.hrefs.pages.blog.latestNewsSection} />
                            <Pagination infoData={infoData.reusableComponents.pagination} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <AsideNewsColumn infoData={infoData.reusableComponents.asideNews} hrefs={infoData.hrefs.aside} />
                            <AsideBlogPostsColumn infoData={infoData.reusableComponents.asidePosts} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Main;
