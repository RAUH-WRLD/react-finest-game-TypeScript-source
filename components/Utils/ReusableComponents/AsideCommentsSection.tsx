import React from "react";
import {Link} from "react-router-dom";
class AsideCommentsSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="popular-comments">
                <div className="popular-comments__content">
                    <div className="popular-comments__title">
                        <h3>{infoData.title}</h3>
                    </div>
                    <div className="popular-comments__info font-style-1">
                        {infoData.comments.map((commentItem: any, index: any) => {
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
            </section>
        );
    }
}
export default AsideCommentsSection;
