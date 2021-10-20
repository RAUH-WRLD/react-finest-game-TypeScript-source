import React from "react";
import {Link} from "react-router-dom";
interface Props {
    href: string;
    srcItem: any;
}
const NewsItem: React.FunctionComponent<Props> = (props) => {
    const {href, srcItem} = props;
    return (
        <Link to={href} className="news-item__link">
            <article className="news-item__article">
                <div className="news-item__article_image">
                    <img src={srcItem.image} alt={srcItem.alt} />
                </div>
                <div className="news-item__article_info">
                    <div className="news-item__article_category font-style-1">
                        <p>{srcItem.category}</p>
                    </div>
                    <div className="news-item__article_title">
                        <h2>{srcItem.title}</h2>
                    </div>
                    <div className="news-item__article_rating">
                        {srcItem.rating ? (
                            <div className="rating__items">
                                {srcItem.rating.map((ratingItem: any) => {
                                    return (
                                        <div className="rating-item" key={`${ratingItem}-${Math.random()}`}>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                        <div className="rating__author font-style-1">
                            <p>
                                <span>{srcItem.by} </span>
                                <span>{srcItem.author}</span>
                            </p>
                        </div>
                    </div>
                    <div className="news-item__article_date font-style-1">
                        <p>{srcItem.date}</p>
                        <p>
                            <i className="far fa-comment"></i>
                            <span>{srcItem.comments}</span>
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
};
export default NewsItem;
