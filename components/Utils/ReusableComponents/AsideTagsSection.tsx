import React from "react";
import {Link} from "react-router-dom";
class AsideTagsSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="tags">
                <div className="tags__content">
                    <div className="tags__title">
                        <h3>{infoData.title}</h3>
                    </div>
                    <div className="tags__info">
                        <ul className="tags__list font-style-1">
                            {infoData.tags.map((tagItem: any) => {
                                return (
                                    <li className="tags__list_item" key={`${tagItem}-${Math.random()}`}>
                                        <Link to={`${tagItem}`}>{tagItem}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default AsideTagsSection;
