import React from "react";
import error_404 from "../../data/error-404-data";
import {Link} from "react-router-dom";
import "../../assets/styles/sass/components/404.scss";
const NotFound404: React.FunctionComponent = () => {
    return (
        <main className="main-error">
            <section className="error-404">
                <div className="error-404__wrapper">
                    <div className="error-404__content font-style-2">
                        <div className="error-404__content_title">
                            <h2>{error_404.title}</h2>
                        </div>
                        <div className="error-404__content_link">
                            <Link to={error_404.link}>{error_404.textLink}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default NotFound404;
