import React from "react";
import {Link} from "react-router-dom";
interface Props {
    href: string;
    srcItem: any;
}
const StartNewsItem: React.FunctionComponent<Props> = (props) => {
    const {href, srcItem} = props;
    return (
        <Link to={href} className="start-news__link">
            <article className="start-news__item">
                <img src={srcItem.image} alt={srcItem.alt} />
                <div className="start-news__item_overview">
                    <p>{srcItem.overview}</p>
                </div>
                <div className="start-news__item_text">
                    <div className="start-news__item_title">
                        <h2>{srcItem.title}</h2>
                    </div>
                    <div className="start-news__item_info font-style-1">
                        <p>{srcItem.info.author}</p>
                        <p>{srcItem.info.date}</p>
                        <p>
                            <i className="far fa-comment"></i>
                            {srcItem.info.comments}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
};
export default StartNewsItem;
