import React from "react";
import AsideCommentsSection from "../../../Utils/ReusableComponents/AsideCommentsSection";
import AsideArchiveSection from "../../../Utils/ReusableComponents/AsideArchiveSection";
import AsideTagsSection from "../../../Utils/ReusableComponents/AsideTagsSection";
import AsideCalendarSection from "../../../Utils/ReusableComponents/AsideCalendarSection";
import AsideCategoriesSection from "../../../Utils/ReusableComponents/AsideCategoriesSection";
import AsideContactPageSection from "../../../Utils/ReusableComponents/AsideContactPageSection";
class AsideBlogPostsColumn extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <aside className="popular-posts">
                <div className="popular-posts__wrapper">
                    <div className="popular-posts__content font-style-2">
                        <AsideCommentsSection infoData={infoData.asideComments} />
                        <AsideArchiveSection infoData={infoData.asideArchive} />
                        <AsideTagsSection infoData={infoData.asideTags} />
                        <AsideCalendarSection infoData={infoData.asideCalendar} />
                        <AsideCategoriesSection infoData={infoData.asideCategories} />
                        <AsideContactPageSection infoData={infoData.asideContactPage} />
                    </div>
                </div>
            </aside>
        );
    }
}
export default AsideBlogPostsColumn;
