import React from "react";
import NewsItem from "./NewsItem";
class AsideNewsColumn extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <aside className="popular-news">
                <div className="popular-news__wrapper">
                    <div className="popular-news__content font-style-2">
                        <section className="social-news">
                            <div className="social-news__content">
                                <div className="social-news__title">
                                    <h3>{infoData.socialNews.title}</h3>
                                </div>
                                <div className="social-news__info">
                                    <div className="social-news__text">
                                        <p>{infoData.socialNews.info}</p>
                                    </div>
                                    <div className="social-news__links">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href={hrefs.socialGamingNews.facebook} target="_blank">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={hrefs.socialGamingNews.twitter} target="_blank">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={hrefs.socialGamingNews.pinterest} target="_blank">
                                                        <i className="fab fa-pinterest-p"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={hrefs.socialGamingNews.vimeo} target="_blank">
                                                        <i className="fab fa-vimeo-v"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={hrefs.socialGamingNews.youtube} target="_blank">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="gaming-newsletter">
                            <div className="gaming-newsletter__content">
                                <div className="gaming-newsletter__title">
                                    <h3>{infoData.gamingNewsletter.title}</h3>
                                </div>
                                <div className="gaming-newsletter__info">
                                    <div className="gaming-newsletter__text">
                                        <p>{infoData.gamingNewsletter.info}</p>
                                    </div>
                                    <div className="gaming-newsletter__form font-style-1">
                                        <form action="">
                                            <input type="email" placeholder={infoData.gamingNewsletter.placeholder} className="newsletter"></input>
                                            <button type="submit" className="newsletter-btn">
                                                <i className="fas fa-envelope"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="gaming-news">
                            <div className="gaming-news__content">
                                <div className="gaming-news__title">
                                    <h3>{infoData.gamingNews.title}</h3>
                                </div>
                                <div className="gaming-news__info">
                                    <div className="gaming-news__items">
                                        <NewsItem href={hrefs.popularGamingNews.newsItem_1} srcItem={infoData.gamingNews.info.newsPost_1} />
                                        <NewsItem href={hrefs.popularGamingNews.newsItem_2} srcItem={infoData.gamingNews.info.newsPost_2} />
                                        <NewsItem href={hrefs.popularGamingNews.newsItem_3} srcItem={infoData.gamingNews.info.newsPost_3} />
                                        <NewsItem href={hrefs.popularGamingNews.newsItem_4} srcItem={infoData.gamingNews.info.newsPost_4} />
                                        <NewsItem href={hrefs.popularGamingNews.newsItem_5} srcItem={infoData.gamingNews.info.newsPost_5} />
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
export default AsideNewsColumn;
