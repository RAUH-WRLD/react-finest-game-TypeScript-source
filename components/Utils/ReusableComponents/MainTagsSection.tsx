import React from "react";
import {Link} from "react-router-dom";
class MainTagsSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="tags">
                <div className="tags__content font-style-1">
                    <div className="tags__items">
                        <i className="fas fa-tags"></i>
                        <ul className="tags__list">
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
export default MainTagsSection;
