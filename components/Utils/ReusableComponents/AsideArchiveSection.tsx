import React from "react";
import {Link} from "react-router-dom";
class AsideArchiveSection extends React.Component<any, any> {
    render() {
        const {infoData} = this.props;
        return (
            <section className="archive">
                <div className="archive__content">
                    <div className="archive__title">
                        <h3>{infoData.title}</h3>
                    </div>
                    <div className="archive__info">
                        <ul className="archive__list font-style-1">
                            {infoData.archives.map((archiveItem: any) => {
                                return (
                                    <li className="archive__list_item" key={`${archiveItem}-${Math.random()}`}>
                                        <Link to={`${archiveItem}`}>
                                            <i className="fas fa-chevron-right"></i>
                                            <span>{archiveItem}</span>
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
export default AsideArchiveSection;
