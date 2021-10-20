import React from "react";
import {Link} from "react-router-dom";
class AsideCategoriesSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="categories">
                <div className="categories__content">
                    <div className="categories__title">
                        <h3>{infoData.title}</h3>
                    </div>
                    <div className="categories__info">
                        <ul className="categories__list font-style-1">
                            {infoData.categories.map((categoryItem: any) => {
                                return (
                                    <li className="categories__list_item" key={`${categoryItem}-${Math.random()}`}>
                                        <Link to={`${categoryItem}`}>
                                            <span>{categoryItem}</span>
                                        </Link>
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
export default AsideCategoriesSection;
