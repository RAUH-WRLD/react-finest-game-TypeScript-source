import React from "react";
import {Link} from "react-router-dom";
class Pagination extends React.Component<any, any> {
    state = {
        prevBtn: "",
        nextBtn: "",
    };
    checkCurrentPage = (prevPage: string, nextPage: string, currentPage: string) => {
        const main = document.getElementsByTagName("main")[0];
        if (main.classList.contains(currentPage)) {
            this.setState({prevBtn: prevPage});
            this.setState({nextBtn: nextPage});
        }
        return false;
    };
    getPagesForPaginationBtns = () => {
        this.checkCurrentPage("page 1", "page 3", "main-home");
        this.checkCurrentPage("page 2", "page 4", "main-blog");
    };
    componentDidMount() {
        this.getPagesForPaginationBtns();
    }
    render() {
        const {infoData} = this.props;
        return (
            <section className="pagination">
                <div className="pagination__wrapper">
                    <div className="pagination__content font-style-1">
                        <div className="pagination__btn pagination__prev">
                            {this.state.prevBtn !== "" ? (
                                <Link to={this.state.prevBtn}>
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                            ) : null}
                        </div>
                        <div className="pagination__pages">
                            {infoData.map((page: any) => {
                                return (
                                    <Link to={`page ${page}`} key={`${page}-${Math.random()}`}>
                                        {page}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="pagination__btn pagination__next">
                            {this.state.nextBtn !== "" ? (
                                <Link to={this.state.nextBtn}>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Pagination;
