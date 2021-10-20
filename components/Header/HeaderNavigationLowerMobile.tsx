import React from "react";
import {Link} from "react-router-dom";
interface Props {
    infoData: any;
    hrefs: any;
}
class HeaderNavigationLowerMobile extends React.Component<Props> {
    private menuRef: React.RefObject<HTMLDivElement>;
    private closerRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props) {
        super(props);
        this.menuRef = React.createRef();
        this.closerRef = React.createRef();
    }
    showMenu() {
        if (this.menuRef.current && this.closerRef.current) {
            this.menuRef.current.classList.add("flex-active");
            this.closerRef.current.classList.add("block-active");
            setTimeout(() => (this.menuRef.current ? this.menuRef.current.classList.add("mobile-menu-active") : null), 100);
            setTimeout(() => (this.closerRef.current ? this.closerRef.current.classList.add("mobile-closer-active") : null), 100);
            return true;
        } else return false;
    }
    closeMenu() {
        if (this.menuRef.current && this.closerRef.current) {
            this.menuRef.current.classList.remove("mobile-menu-active");
            this.closerRef.current.classList.remove("mobile-closer-active");
            setTimeout(() => (this.menuRef.current ? this.menuRef.current.classList.remove("flex-active") : null), 500);
            setTimeout(() => (this.closerRef.current ? this.closerRef.current.classList.remove("block-active") : null), 500);
            return true;
        } else return false;
    }
    render() {
        const {infoData, hrefs} = this.props;
        return (
            <div className="lower__navigation_mobile">
                <div className="lower__navigation_mobile_btn">
                    <button className="menu-btn" onClick={() => this.showMenu()}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="lower__navigation_mobile_list" ref={this.menuRef}>
                    <nav>
                        <ul>
                            <li className="lower__navigation_item">
                                <Link to={hrefs.news}>{infoData.text_1}</Link>
                            </li>
                            <li className="lower__navigation_item menu">
                                <Link to={hrefs.previews.previews}>
                                    <span>{infoData.text_2}</span>
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="menu__list">
                                    <li className="menu__list_item submenu">
                                        <Link to={hrefs.previews.posts.posts} className="menu__list_link">
                                            <span>{infoData.text_2_menu.menuText_1}</span>
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </Link>
                                        <ul className="submenu__list">
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.posts.gallery}>{infoData.text_2_menu.menuText_1_submenu.submenuText_1}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.posts.audio}>{infoData.text_2_menu.menuText_1_submenu.submenuText_2}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.posts.video}>{infoData.text_2_menu.menuText_1_submenu.submenuText_3}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.posts.link}>{infoData.text_2_menu.menuText_1_submenu.submenuText_4}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.posts.quote}>{infoData.text_2_menu.menuText_1_submenu.submenuText_5}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu__list_item submenu">
                                        <Link to={hrefs.previews.blogs.blog} className="menu__list_link">
                                            <span>{infoData.text_2_menu.menuText_2}</span>
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </Link>
                                        <ul className="submenu__list">
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.blogs.blog}>{infoData.text_2_menu.menuText_2_submenu.submenuText_1}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.blogs.blogAudio}>{infoData.text_2_menu.menuText_2_submenu.submenuText_2}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.blogs.videoBlog}>{infoData.text_2_menu.menuText_2_submenu.submenuText_3}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.blogs.blogLink}>{infoData.text_2_menu.menuText_2_submenu.submenuText_4}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu__list_item submenu">
                                        <Link to={hrefs.previews.sidebar.sidebar} className="menu__list_link">
                                            <span>{infoData.text_2_menu.menuText_3}</span>
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </Link>
                                        <ul className="submenu__list">
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.sidebar.sidebarFormat}>{infoData.text_2_menu.menuText_3_submenu.submenuText_1}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.sidebar.settings}>{infoData.text_2_menu.menuText_3_submenu.submenuText_2}</Link>
                                            </li>
                                            <li className="submenu__list_item">
                                                <Link to={hrefs.previews.sidebar.videoSidebar}>{infoData.text_2_menu.menuText_3_submenu.submenuText_3}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="lower__navigation_item">
                                <Link to={hrefs.reviews}>{infoData.text_3}</Link>
                            </li>
                            <li className="lower__navigation_item">
                                <Link to={hrefs.video}>{infoData.text_4}</Link>
                            </li>
                            <li className="lower__navigation_item">
                                <Link to={hrefs.platform}>{infoData.text_5}</Link>
                            </li>
                        </ul>
                    </nav>
                    <img src={infoData.logo} alt={infoData.alt} />
                </div>
                <div className="lower__navigation_mobile_closer" ref={this.closerRef} onClick={() => this.closeMenu()}></div>
            </div>
        );
    }
}
export default HeaderNavigationLowerMobile;
