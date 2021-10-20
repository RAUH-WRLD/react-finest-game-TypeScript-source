import React from "react";
import {Link} from "react-router-dom";
interface Props {
    href: string;
    srcItem: any;
}
const ReleasesSliderItem: React.FunctionComponent<Props> = (props) => {
    const {href, srcItem} = props;
    return (
        <Link to={href} className="releases__link">
            <article className="releases__content_item">
                <img src={srcItem.image} alt={srcItem.alt} />
                <div className="releases__content_info">
                    <div className="releases__content_title">
                        <h4>{srcItem.title}</h4>
                    </div>
                    <p>{srcItem.info.platforms}</p>
                    <p>{srcItem.info.publisher}</p>
                    <p>{srcItem.info.developer}</p>
                    <p>{srcItem.info.release}</p>
                    <p>{srcItem.info.more}</p>
                </div>
            </article>
        </Link>
    );
};
export default ReleasesSliderItem;
