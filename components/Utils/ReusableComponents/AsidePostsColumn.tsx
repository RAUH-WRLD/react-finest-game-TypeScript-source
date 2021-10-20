import React from "react";
import AsideCommentsSection from "./AsideCommentsSection";
import NewsItem from "./NewsItem";
class AsidePostsColumn extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <aside className="popular-posts">
                <div className="popular-posts__wrapper">
                    <div className="popular-posts__content font-style-2">
                        <AsideCommentsSection infoData={infoData.asideComments} />
                        <section className="recomended-posts">
                            <div className="recomended-posts__content">
                                <div className="recomended-posts__title">
                                    <h3>{infoData.asidePosts.title}</h3>
                                </div>
                                <div className="recomended-posts__info">
                                    <div className="recomended-posts__items">
                                        <NewsItem href={hrefs.recomendedPosts.postItem_1} srcItem={infoData.asidePosts.posts.post_1} />
                                        <NewsItem href={hrefs.recomendedPosts.postItem_2} srcItem={infoData.asidePosts.posts.post_2} />
                                        <NewsItem href={hrefs.recomendedPosts.postItem_3} srcItem={infoData.asidePosts.posts.post_3} />
                                        <NewsItem href={hrefs.recomendedPosts.postItem_4} srcItem={infoData.asidePosts.posts.post_4} />
                                        <NewsItem href={hrefs.recomendedPosts.postItem_5} srcItem={infoData.asidePosts.posts.post_5} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </aside>
        );
    }
}
export default AsidePostsColumn;
