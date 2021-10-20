import React from "react";
import {Link} from "react-router-dom";
interface Props {
    href: string;
    srcItem: any;
}
const PostItem: React.FunctionComponent<Props> = (props) => {
    const {href, srcItem} = props;
    return (
        <Link to={href} className="post__link">
            <article className="post__item">
                <img src={srcItem.image} alt={srcItem.alt} />
                <div className="post__item_overview">
                    <p>{srcItem.overview}</p>
                </div>
                <div className="post__item_text">
                    <div className="post__item_title">
                        <h2>{srcItem.title}</h2>
                    </div>
                    <div className="post__item_info font-style-1">
                        <p>
                            <span>{srcItem.info.by} </span>
                            <span>{srcItem.info.author}</span>
                        </p>
                        <p>{srcItem.info.date}</p>
                        <p>
                            <i className="far fa-comment"></i>
                            <span>{srcItem.info.comments}</span>
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
};
export default PostItem;
