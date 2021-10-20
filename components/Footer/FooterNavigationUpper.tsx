import React from "react";
import {Link} from "react-router-dom";
class FooterNavigationUpper extends React.Component<any, any> {
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <div className="footer__content_upper">
                <div className="container">
                    <div className="upper font-style-1">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="upper__item categories">
                                            <div className="upper__item_title">
                                                <h4>{infoData.upperItem_1.title}</h4>
                                            </div>
                                            <div className="upper__item_info">
                                                <nav>
                                                    <ul>
                                                        {infoData.upperItem_1.navigationLinks.map((linkItem: any) => {
                                                            return (
                                                                <li key={`${linkItem}-${Math.random()}`}>
                                                                    <Link to={`${linkItem}`}>{linkItem}</Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="upper__item information">
                                            <div className="upper__item_title">
                                                <h4>{infoData.upperItem_2.title}</h4>
                                            </div>
                                            <div className="upper__item_info">
                                                <nav>
                                                    <ul>
                                                        {infoData.upperItem_2.navigationLinks.map((linkItem: any) => {
                                                            return (
                                                                <li key={`${linkItem}-${Math.random()}`}>
                                                                    <Link to={`${linkItem}`}>{linkItem}</Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="upper__item recent-post">
                                            <div className="upper__item_title">
                                                <h4>{infoData.upperItem_3.title}</h4>
                                            </div>
                                            <div className="upper__item_info">
                                                <Link to={hrefs.recent.post} className="recent-post__link">
                                                    <article className="recent-post__item">
                                                        <img src={infoData.upperItem_3.post.image} alt={infoData.upperItem_3.post.alt} />
                                                        <div className="recent-post__item_overview">
                                                            <p>{infoData.upperItem_3.post.category}</p>
                                                        </div>
                                                        <div className="recent-post__item_text">
                                                            <div className="recent-post__item_title">
                                                                <h2>{infoData.upperItem_3.post.title}</h2>
                                                            </div>
                                                            <div className="recent-post__item_info font-style-1">
                                                                <p>
                                                                    <span>{infoData.upperItem_3.post.by} </span>
                                                                    <span>{infoData.upperItem_3.post.author}</span>
                                                                </p>
                                                                <p>
                                                                    <span>{infoData.upperItem_3.post.date}</span>
                                                                    <span>
                                                                        <i className="far fa-comment"></i>
                                                                        <span>{infoData.upperItem_3.post.comments}</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="upper__item recent-comments">
                                            <div className="upper__item_title">
                                                <h4>{infoData.upperItem_4.title}</h4>
                                            </div>
                                            <div className="upper__item_info">
                                                {infoData.upperItem_4.comments.map((commentItem: any, index: any) => {
                                                    return (
                                                        <Link to={`comment ${index}`} key={`${commentItem}-${Math.random()}`}>
                                                            <p>
                                                                <span>{commentItem.author}</span>
                                                                <span>{commentItem.on}</span>
                                                                <span>{commentItem.comment}</span>
                                                            </p>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FooterNavigationUpper;
