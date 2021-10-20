import React from "react";
interface Props {
    href: string;
    srcItem: any;
}
const BloggerItem: React.FunctionComponent<Props> = (props) => {
    const {href, srcItem} = props;
    return (
        <a href={href} className="blogger-item" target="_blank">
            <div className="blogger-item__wrapper">
                <div className="blogger-item__avatar">
                    <img src={srcItem.avatar} alt="" />
                </div>
                <div className="blogger-item__info font-style-1">
                    <div className="blogger-item__info_name font-style-2">
                        <p>{srcItem.name}</p>
                    </div>
                    <div className="blogger-item__info_position">
                        <p>{srcItem.position}</p>
                    </div>
                    <div className="blogger-item__info_bio">
                        <p>{srcItem.info.text_1}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};
export default BloggerItem;
